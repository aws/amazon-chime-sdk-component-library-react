const BaseTestPage = require('./BaseTestPage');
const assert = require('assert');
const { By } = require('selenium-webdriver');

const ELEMENTS = {
  toggleMicrophoneButton: By.css(
    '[data-testid=\'button\'][label=\'Mute\'], [data-testid=\'button\'][label=\'Unmute\']'
  ),
  toggleVideoButton: By.css('[data-testid=\'button\'][label=\'Video\']'),
  toggleSpeakerButton: By.css('[data-testid=\'button\'][label=\'Speaker\']'),
  toggleContentButton: By.css('[data-testid=\'button\'][label=\'Content\']'),
  roster: By.css('.roster'),
  rosterCell: By.css('[data-testid=\'roster-cell\']'),
  hookStates: By.css('pre'),
  attendeeState: By.css('code'),
};


class RosterTestPage extends BaseTestPage {
  constructor(driver) {
    super(driver);
  }

  async getRosterLength() {
    const rosterCells = await this.findAll(ELEMENTS.rosterCell);
    return rosterCells.length;
  }

  async getAttendeeRosterCell(attendeeName) {
    const rosterCells = await this.findAll(ELEMENTS.rosterCell);
    for (const rosterCell of rosterCells) {
      const name = await rosterCell.getText();
      if (name === attendeeName) {
        return rosterCell;
      }
    }
  }

  async getAttendeeStates(attendeeName) {
    const hookStates = this.find(ELEMENTS.hookStates);
    const attendeeStates = await hookStates.findElements(ELEMENTS.attendeeState);

    for (const attendeeState of attendeeStates) {
      const testId = await attendeeState.getAttribute('data-testid');
      if (testId === ('code-' + attendeeName)) {
        return JSON.parse(await attendeeState.getText());
      }
    }

    return {};
  }

  async getAttendeeState(attendeeName, property) {
    const attendeeState = await this.getAttendeeStates(attendeeName);
    const hookState = Object.values(attendeeState)[0];
    return hookState[property];
  }

  async getLengthOfAttendeeStates() {
    const hookStates = this.find(ELEMENTS.hookStates);
    const attendeeStates = await hookStates.findElements(ELEMENTS.attendeeState);
    return attendeeStates.length;
  }

  async checkRosterLength(targetLength) {
    const isMatched = await this.waitUntil(async () => {
      const actualLength = await this.getRosterLength();
      return actualLength === targetLength;
    });

    assert(isMatched, `The length of roster is not ${targetLength}`);
  }

  async checkIfAttendeeIsInRoster(attendeeName) {
    const isMatched = this.waitUntil(async () => {
      const rosterCells = await this.findAll(ELEMENTS.rosterCell);
      for (const rosterCell of rosterCells) {
        const name = await rosterCell.getText();
        return name === attendeeName;
      }
    });

    assert(isMatched, `Attendee ${attendeeName} is not in the roster`);
  }

  async checkLengthOfAttendeeStates(targetLength) {
    const length = await this.getLengthOfAttendeeStates();
    assert(length === targetLength, `The length of attendee states is not ${targetLength} but ${length}`);
  }

  async checkAttendeeState(attendeeName, property, value, equal = true) {
    const passed = await this.waitUntil(async () => {
      const state = await this.getAttendeeState(attendeeName, property);
      if (equal) {
        return state === value;
      } else {
        return state !== value;
      }
    });

    assert(passed, `Wrong attendee property, the ${property} of ${attendeeName} should be ${value}`);
  }

  async toggleMicrophone() {
    await this.find(ELEMENTS.toggleMicrophoneButton).click();
  }

  async toggleVideo() {
    await this.find(ELEMENTS.toggleVideoButton).click();
  }

  async toggleSpeaker() {
    await this.find(ELEMENTS.toggleSpeakerButton).click();
  }

  async toggleContent() {
    await this.find(ELEMENTS.toggleContentButton).click();
  }

  async checkMicrophoneIcon(attendeeName, muted) {
    const isMatched = await this.waitUntil(async () => {
      const rosterCell = await this.getAttendeeRosterCell(attendeeName);
      const title = await rosterCell.findElement(By.css('title')).getAttribute('innerHTML');
      const target = muted ? 'Muted microphone' : 'Microphone';
      return title === target;
    });

    assert(isMatched, `Wrong microphone icon when muted is ${muted}`);
  }

  async checkVideoIcon(attendeeName, videoEnabled) {
    const isMatched = await this.waitUntil(async () => {
      const rosterCell = await this.getAttendeeRosterCell(attendeeName);
      const childElements = await rosterCell.findElements(By.xpath('*'));
      const videoIcon = childElements[2];
      // Compare the path definition value of the video icon SVG to determine if it is the target icon.
      // When video is enabled, it should start with 'M19', otherwise it should start with 'M4'.
      const d = await videoIcon.findElement(By.css('path')).getAttribute('d');
      return videoEnabled === d.startsWith('M19');
    });

    assert(isMatched, `Wrong video icon when videoEnabled is ${videoEnabled}`);
  }

  async checkContentIcon(attendeeName, sharingContent) {
    const isMatched = await this.waitUntil(async () => {
      const rosterCell = await this.getAttendeeRosterCell(attendeeName);
      const childElements = await rosterCell.findElements(By.xpath('*'));
      const contentIcon = childElements[2];
      let title;

      try {
        title = await contentIcon.findElement(By.css('title'))?.getAttribute('innerHTML');
      } catch (error) {
        title = '';
      }

      const target = sharingContent ? 'Screen share' : '';
      return title === target;
    });

    assert(isMatched, `Wrong content icon when sharingContent is ${sharingContent}`);
  }
}

module.exports = RosterTestPage;
