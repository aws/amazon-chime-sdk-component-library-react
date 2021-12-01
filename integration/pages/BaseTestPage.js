const BasePage = require('./BasePage');
const assert = require('assert');
const { By } = require('selenium-webdriver');

const ELEMENTS = {
  appHeader: By.css('[data-testid=\'app-name\']'),
  meetingIdInputBox: By.css('[data-testid=\'input\'][name=\'Meeting Id\']'),
  nameInputBox: By.css('[data-testid=\'input\'][name=\'Name\']'),
  joinMeetingButton: By.css('[data-testid=\'button\'][label=\'Join Meeting\']'),
  leaveMeetingButton: By.css('[data-testid=\'button\'][label=\'Leave\']'),
  meetingStatus: By.id('meeting-status'),
};

class BaseTestPage extends BasePage {
  constructor(driver) {
    super(driver);
  }

  async enterMeetingInfo(meetingId, name) {
    const meetingIdInputBox = this.find(ELEMENTS.meetingIdInputBox);
    await meetingIdInputBox.sendKeys(meetingId);

    const nameInputBox = this.find(ELEMENTS.nameInputBox);
    await nameInputBox.sendKeys(name);
  }

  async joinMeeting() {
    await this.find(ELEMENTS.joinMeetingButton).click();
  }

  async leaveMeeting() {
    await this.find(ELEMENTS.leaveMeetingButton).click();
  }

  async checkIfAttendeeHasJoinedMeeting() {
    const isMatched = await this.waitUntil(async () => {
      const meetingStatus = await this.find(ELEMENTS.meetingStatus).getText();
      return meetingStatus === 'Succeeded';
    }, 5000);

    assert(isMatched, 'Attendee did not join the meeting successfully');
  }

  async checkIfAppLoaded() {
    const isDisplayed = await this.isDisplayed(
      ELEMENTS.appHeader,
      5000
    );
    assert(isDisplayed, 'App was not loaded successfully');
  }

  async checkIfAttendeeHasLeftMeeting() {
    const isMatched = await this.waitUntil(async () => {
      const meetingStatus = await this.find(ELEMENTS.meetingStatus).getText();
      return meetingStatus === 'Left';
    }, 5000);

    assert(isMatched, 'Attendee did not leave the meeting successfully');
  }
}

module.exports = BaseTestPage;
