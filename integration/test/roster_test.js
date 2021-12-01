const { describe, before, after, it } = require('mocha');
const { v4: uuidv4 } = require('uuid');
const RosterTestPage = require('../pages/RosterTestPage');
const DriverFactory = require('../utils/DriverFactory');

describe('Roster Test', async function () {
  const chromeDriverFactory = new DriverFactory();
  const firefoxDriverFactory = new DriverFactory();
  let localPage;
  let remotePage;
  const meetingId = uuidv4();
  localAttendeeName = 'local-attendee';
  remoteAttendeeName = 'remote-attendee';
  let failureCount = 0;

  before(async function () {
    await chromeDriverFactory.build('Roster Test - Local', 'sauce-chrome');
    localPage = new RosterTestPage(chromeDriverFactory.driver);

    await firefoxDriverFactory.build('Roster Test - Remote', 'sauce-firefox');
    remotePage = new RosterTestPage(firefoxDriverFactory.driver);
  });

  afterEach(function () {
    const state = this.currentTest.state;
    if (state === 'failed') {
      failureCount += 1;
    }
  });

  after(async function () {
    const passed = failureCount === 0;
    await chromeDriverFactory.quit(passed);
    await firefoxDriverFactory.quit(passed);
  });

  describe('Load Roster Test App', async function () {
    it('should load the roster test App successfully - local attendee', async function () {
      await localPage.visit('/roster-test');
      await localPage.checkIfAppLoaded();
    });

    it('should load the roster test App successfully - remote attendee', async function () {
      await remotePage.visit('/roster-test');
      await remotePage.checkIfAppLoaded();
    });
  });

  describe('Join Meeting', async function () {
    it('should join the meeting successfully - local attendee', async function () {
      await localPage.enterMeetingInfo(meetingId, localAttendeeName);
      await localPage.joinMeeting();
      await localPage.checkIfAttendeeHasJoinedMeeting();
    });

    it('should join the meeting successfully - remote attendee', async function () {
      await remotePage.enterMeetingInfo(meetingId, remoteAttendeeName);
      await remotePage.joinMeeting();
      await remotePage.checkIfAttendeeHasJoinedMeeting();
    });
  });

  describe('Attendee Presence', async function () {
    describe('length', async function () {
      describe('#RosterAttendee / length', async function () {
        it('should be equal to 2 - local attendee', async function () {
          await localPage.checkRosterLength(2);
        });

        it('should be equal to 2 - remote attendee', async function () {
          await remotePage.checkRosterLength(2);
        });
      });

      describe('#useAttendeeStatus / length', async function () {
        it('should be equal to 2 - local attendee', async function () {
          await localPage.checkLengthOfAttendeeStates(2);
        });

        it('should be equal to 2 - remote attendee', async function () {
          await remotePage.checkLengthOfAttendeeStates(2);
        });
      });

      describe('#useAttendeeStatus / chimeAttendeeId', async function () {
        it('should not be empty - local attendee', async function () {
          await localPage.checkAttendeeState(localAttendeeName, 'chimeAttendeeId', '', false);
        });

        it('should not be empty - remote attendee', async function () {
          await remotePage.checkAttendeeState(localAttendeeName, 'chimeAttendeeId', '', false);
        });
      });

      describe('#useAttendeeStatus / externalUserId', async function () {
        it('should not be empty - local attendee', async function () {
          await localPage.checkAttendeeState(localAttendeeName, 'externalUserId', '', false);
        });

        it('should not be empty - remote attendee', async function () {
          await remotePage.checkAttendeeState(localAttendeeName, 'externalUserId', '', false);
        });
      });

      describe('#useAttendeeStatus / signalStrength', async function () {
        it('should be equal to 1 - local attendee', async function () {
          await localPage.checkAttendeeState(localAttendeeName, 'signalStrength', 1);
        });

        it('should be equal to 1 - remote attendee', async function () {
          await remotePage.checkAttendeeState(localAttendeeName, 'signalStrength', 1);
        });
      });
    });

    describe('name', async function () {
      describe('#RosterAttendee / nameplate', async function () {
        it('should display the correct name - local attendee', async function () {
          await localPage.checkIfAttendeeIsInRoster(localAttendeeName);
        });

        it('should display the correct name - remote attendee', async function () {
          await remotePage.checkIfAttendeeIsInRoster(localAttendeeName);
        });
      });

      describe('#useAttendeeStatus / name', async function () {
        it('should be equal to attendee name - local attendee', async function () {
          await localPage.checkAttendeeState(localAttendeeName, 'name', localAttendeeName);
        });

        it('should be equal to attendee name - remote attendee', async function () {
          await remotePage.checkAttendeeState(localAttendeeName, 'name', localAttendeeName);
        });
      });
    });
  });

  describe('Microphone', async function () {
    describe('mute', async function () {
      before(async function () {
        await localPage.toggleMicrophone();
      });

      describe('#RosterAttendee / microphone muted icon', async function () {
        it('should have it - local attendee', async function () {
          await localPage.checkMicrophoneIcon(localAttendeeName, true);
        });

        it('should have it - remote attendee', async function () {
          await remotePage.checkMicrophoneIcon(localAttendeeName, true);
        });
      });

      describe('#useAttendeeStatus / muted', async function () {
        it('should be true - local attendee', async function () {
          await localPage.checkAttendeeState(localAttendeeName, 'muted', true);
        });

        it('should be true - remote attendee', async function () {
          await remotePage.checkAttendeeState(localAttendeeName, 'muted', true);
        });
      });
    });

    describe('unmute', async function () {
      before(async function () {
        await localPage.toggleMicrophone();
      });

      describe('#RosterAttendee / microphone unmuted icon', async function () {
        it('should have it - local attendee', async function () {
          await localPage.checkMicrophoneIcon(localAttendeeName, false);
        });

        it('should have it - remote attendee', async function () {
          await remotePage.checkMicrophoneIcon(localAttendeeName, false);
        });
      });

      describe('#useAttendeeStatus / muted', async function () {
        it('should be false - local attendee', async function () {
          await localPage.checkAttendeeState(localAttendeeName, 'muted', false);
        });

        it('should be false - remote attendee', async function () {
          await remotePage.checkAttendeeState(localAttendeeName, 'muted', false);
        });
      });
    });
  });

  describe('Video', async function () {
    describe('enable', async function () {
      before(async function () {
        await localPage.toggleVideo();
      });

      describe('#RosterAttendee / video enabled icon', async function () {
        it('should have it - local attendee', async function () {
          await localPage.checkVideoIcon(localAttendeeName, true);
        });

        it('should have it - remote attendee', async function () {
          await remotePage.checkVideoIcon(localAttendeeName, true);
        });
      });

      describe('#useAttendeeStatus / videoEnabled', async function () {
        it('should be true - local attendee', async function () {
          await localPage.checkAttendeeState(localAttendeeName, 'videoEnabled', true);
        });

        it('should be true - remote attendee', async function () {
          await remotePage.checkAttendeeState(localAttendeeName, 'videoEnabled', true);
        });
      });
    });

    describe('disable', async function () {
      before(async function () {
        await localPage.toggleVideo();
      });

      describe('#RosterAttendee / video disabled icon', async function () {
        it('should have it - local attendee', async function () {
          await localPage.checkVideoIcon(localAttendeeName, false);
        });

        it('should have it - remote attendee', async function () {
          await remotePage.checkVideoIcon(localAttendeeName, false);
        });
      });

      describe('#useAttendeeStatus / videoEnabled', async function () {
        it('should be false - local attendee', async function () {
          await localPage.checkAttendeeState(localAttendeeName, 'videoEnabled', false);
        });

        it('should be false - remote attendee', async function () {
          await remotePage.checkAttendeeState(localAttendeeName, 'videoEnabled', false);
        });
      });
    });
  });

  describe('Content', async function () {
    describe('start', async function () {
      before(async function () {
        await localPage.toggleContent();
      });

      describe('#RosterAttendee / content icon', async function () {
        it('should have it - local attendee', async function () {
          await localPage.checkContentIcon(localAttendeeName, true);
        });

        it('should have it - remote attendee', async function () {
          await remotePage.checkContentIcon(localAttendeeName, true);
        });
      });

      describe('#useAttendeeStatus / sharingContent', async function () {
        it('should be true - local attendee', async function () {
          await localPage.checkAttendeeState(localAttendeeName, 'sharingContent', true);
        });

        it('should be true - remote attendee', async function () {
          await remotePage.checkAttendeeState(localAttendeeName, 'sharingContent', true);
        });
      });
    });

    describe('stop', async function () {
      before(async function () {
        await localPage.toggleContent();
      });

      describe('#RosterAttendee / content icon', async function () {
        it('should not have it - local attendee', async function () {
          await localPage.checkContentIcon(localAttendeeName, false);
        });

        it('should not have it - remote attendee', async function () {
          await remotePage.checkContentIcon(localAttendeeName, false);
        });
      });

      describe('#useAttendeeStatus / sharingContent', async function () {
        it('should be false - local attendee', async function () {
          await localPage.checkAttendeeState(localAttendeeName, 'sharingContent', false);
        });

        it('should be false - remote attendee', async function () {
          await remotePage.checkAttendeeState(localAttendeeName, 'sharingContent', false);
        });
      });
    });
  });

  describe('Leave meeting', async function () {
    it('should leave meeting successfully - local attendee', async function () {
      await localPage.leaveMeeting();
      await localPage.checkIfAttendeeHasLeftMeeting();
    });

    it('should leave meeting successfully - remote attendee', async function () {
      await remotePage.leaveMeeting();
      await remotePage.checkIfAttendeeHasLeftMeeting();
    });
  });
});
