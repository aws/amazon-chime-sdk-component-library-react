const { describe, before, after, it } = require('mocha');
const { v4: uuidv4 } = require('uuid');
const RosterTestPage = require('../pages/RosterTestPage');
const DriverFactory = require('../utils/DriverFactory');
const Window = require('../utils/Window');

describe('Roster Test', async function () {
  const driverFactory = new DriverFactory();
  let page;
  let localWindow;
  let remoteWindow;
  let failureCount = 0;

  const meetingId = uuidv4();
  const localAttendeeName = 'local-attendee';
  const remoteAttendeeName = 'remote-attendee';

  before(async function () {
    await driverFactory.build('Roster Test', 'sauce-chrome');
    page = new RosterTestPage(driverFactory.driver);
    localWindow = await Window.getDefaultWindow(driverFactory.driver, 'localAttendeeWindow');
    remoteWindow = await Window.createNewWindow(driverFactory.driver, 'remoteAttendeeWindow');
  });

  afterEach(function () {
    const state = this.currentTest.state;
    if (state === 'failed') failureCount += 1;
  });

  after(async function () {
    const passed = failureCount === 0;
    await driverFactory.quit(passed);
  });

  describe('Load Roster Test App', async function () {
    it('should load the roster test App successfully - local attendee', async function () {
      await localWindow.run(async () => await page.visit('/roster-test'));
      await localWindow.run(async () => await page.checkIfAppLoaded());
    });

    it('should load the roster test App successfully - remote attendee', async function () {
      await remoteWindow.run(async () => await page.visit('/roster-test'));
      await remoteWindow.run(async () => await page.checkIfAppLoaded());
    });
  });

  describe('Join Meeting', async function () {
    it('should join the meeting successfully - local attendee', async function () {
      await localWindow.run(async () => await page.enterMeetingInfo(meetingId, localAttendeeName));
      await localWindow.run(async () => await page.joinMeeting());
      await localWindow.run(async () => await page.checkIfAttendeeHasJoinedMeeting());
    });

    it('should join the meeting successfully - remote attendee', async function () {
      await remoteWindow.run(async () => await page.enterMeetingInfo(meetingId, remoteAttendeeName));
      await remoteWindow.run(async () => await page.joinMeeting());
      await remoteWindow.run(async () => await page.checkIfAttendeeHasJoinedMeeting());
    });
  });

  describe('Attendee Presence', async function () {
    describe('length', async function () {
      describe('#RosterAttendee / length', async function () {
        it('should be equal to 2 - local attendee', async function () {
          await localWindow.run(async () => await page.checkRosterLength(2));
        });

        it('should be equal to 2 - remote attendee', async function () {
          await remoteWindow.run(async () => await page.checkRosterLength(2));
        });
      });

      describe('#useAttendeeStatus / length', async function () {
        it('should be equal to 2 - local attendee', async function () {
          await localWindow.run(async () => await page.checkLengthOfAttendeeStates(2));
        });

        it('should be equal to 2 - remote attendee', async function () {
          await remoteWindow.run(async () => await page.checkLengthOfAttendeeStates(2));
        });
      });

      describe('#useAttendeeStatus / chimeAttendeeId', async function () {
        it('should not be empty - local attendee', async function () {
          await localWindow.run(async () => await page.checkAttendeeState(localAttendeeName, 'chimeAttendeeId', '', false));
        });

        it('should not be empty - remote attendee', async function () {
          await remoteWindow.run(async () => await page.checkAttendeeState(localAttendeeName, 'chimeAttendeeId', '', false));
        });
      });

      describe('#useAttendeeStatus / externalUserId', async function () {
        it('should not be empty - local attendee', async function () {
          await localWindow.run(async () => await page.checkAttendeeState(localAttendeeName, 'externalUserId', '', false));
        });

        it('should not be empty - remote attendee', async function () {
          await remoteWindow.run(async () => await page.checkAttendeeState(localAttendeeName, 'externalUserId', '', false));
        });
      });

      describe('#useAttendeeStatus / signalStrength', async function () {
        it('should be equal to 1 - local attendee', async function () {
          await localWindow.run(async () => await page.checkAttendeeState(localAttendeeName, 'signalStrength', 1));
        });

        it('should be equal to 1 - remote attendee', async function () {
          await remoteWindow.run(async () => await page.checkAttendeeState(localAttendeeName, 'signalStrength', 1));
        });
      });
    });

    describe('name', async function () {
      describe('#RosterAttendee / nameplate', async function () {
        it('should display the correct name - local attendee', async function () {
          await localWindow.run(async () => await page.checkIfAttendeeIsInRoster(localAttendeeName));
        });

        it('should display the correct name - remote attendee', async function () {
          await remoteWindow.run(async () => await page.checkIfAttendeeIsInRoster(localAttendeeName));
        });
      });

      describe('#useAttendeeStatus / name', async function () {
        it('should be equal to attendee name - local attendee', async function () {
          await localWindow.run(async () => await page.checkAttendeeState(localAttendeeName, 'name', localAttendeeName));
        });

        it('should be equal to attendee name - remote attendee', async function () {
          await remoteWindow.run(async () => await page.checkAttendeeState(localAttendeeName, 'name', localAttendeeName));
        });
      });
    });
  });

  describe('Microphone', async function () {
    describe('mute', async function () {
      before(async function () {
        await localWindow.run(async () => await await page.toggleMicrophone());
      });

      describe('#RosterAttendee / microphone muted icon', async function () {
        it('should have it - local attendee', async function () {
          await localWindow.run(async () => await page.checkMicrophoneIcon(localAttendeeName, true));
        });

        it('should have it - remote attendee', async function () {
          await remoteWindow.run(async () => await page.checkMicrophoneIcon(localAttendeeName, true));
        });
      });

      describe('#useAttendeeStatus / muted', async function () {
        it('should be true - local attendee', async function () {
          await localWindow.run(async () => await page.checkAttendeeState(localAttendeeName, 'muted', true));
        });

        it('should be true - remote attendee', async function () {
          await remoteWindow.run(async () => await page.checkAttendeeState(localAttendeeName, 'muted', true));
        });
      });
    });

    describe('unmute', async function () {
      before(async function () {
        await localWindow.run(async () => await await page.toggleMicrophone());
      });

      describe('#RosterAttendee / microphone unmuted icon', async function () {
        it('should have it - local attendee', async function () {
          await localWindow.run(async () => await page.checkMicrophoneIcon(localAttendeeName, false));
        });

        it('should have it - remote attendee', async function () {
          await remoteWindow.run(async () => await page.checkMicrophoneIcon(localAttendeeName, false));
        });
      });

      describe('#useAttendeeStatus / muted', async function () {
        it('should be false - local attendee', async function () {
          await localWindow.run(async () => await page.checkAttendeeState(localAttendeeName, 'muted', false));
        });

        it('should be false - remote attendee', async function () {
          await remoteWindow.run(async () => await page.checkAttendeeState(localAttendeeName, 'muted', false));
        });
      });
    });
  });

  describe('Video', async function () {
    describe('enable', async function () {
      before(async function () {
        await localWindow.run(async () => await await page.toggleVideo());
      });

      describe('#RosterAttendee / video enabled icon', async function () {
        it('should have it - local attendee', async function () {
          await localWindow.run(async () => await page.checkVideoIcon(localAttendeeName, true));
        });

        it('should have it - remote attendee', async function () {
          await remoteWindow.run(async () => await page.checkVideoIcon(localAttendeeName, true));
        });
      });

      describe('#useAttendeeStatus / videoEnabled', async function () {
        it('should be true - local attendee', async function () {
          await localWindow.run(async () => await page.checkAttendeeState(localAttendeeName, 'videoEnabled', true));
        });

        it('should be true - remote attendee', async function () {
          await remoteWindow.run(async () => await page.checkAttendeeState(localAttendeeName, 'videoEnabled', true));
        });
      });
    });

    describe('disable', async function () {
      before(async function () {
        await localWindow.run(async () => await await page.toggleVideo());
      });

      describe('#RosterAttendee / video disabled icon', async function () {
        it('should have it - local attendee', async function () {
          await localWindow.run(async () => await page.checkVideoIcon(localAttendeeName, false));
        });

        it('should have it - remote attendee', async function () {
          await remoteWindow.run(async () => await page.checkVideoIcon(localAttendeeName, false));
        });
      });

      describe('#useAttendeeStatus / videoEnabled', async function () {
        it('should be false - local attendee', async function () {
          await localWindow.run(async () => await page.checkAttendeeState(localAttendeeName, 'videoEnabled', false));
        });

        it('should be false - remote attendee', async function () {
          await remoteWindow.run(async () => await page.checkAttendeeState(localAttendeeName, 'videoEnabled', false));
        });
      });
    });
  });

  describe('Content', async function () {
    describe('start', async function () {
      before(async function () {
        await localWindow.run(async () => await await page.toggleContent());
      });

      describe('#RosterAttendee / content icon', async function () {
        it('should have it - local attendee', async function () {
          await localWindow.run(async () => await page.checkContentIcon(localAttendeeName, true));
        });

        it('should have it - remote attendee', async function () {
          await remoteWindow.run(async () => await page.checkContentIcon(localAttendeeName, true));
        });
      });

      describe('#useAttendeeStatus / sharingContent', async function () {
        it('should be true - local attendee', async function () {
          await localWindow.run(async () => await page.checkAttendeeState(localAttendeeName, 'sharingContent', true));
        });

        it('should be true - remote attendee', async function () {
          await remoteWindow.run(async () => await page.checkAttendeeState(localAttendeeName, 'sharingContent', true));
        });
      });
    });

    describe('stop', async function () {
      before(async function () {
        await localWindow.run(async () => await await page.toggleContent());
      });

      describe('#RosterAttendee / content icon', async function () {
        it('should not have it - local attendee', async function () {
          await localWindow.run(async () => await page.checkContentIcon(localAttendeeName, false));
        });

        it('should not have it - remote attendee', async function () {
          await remoteWindow.run(async () => await page.checkContentIcon(localAttendeeName, false));
        });
      });

      describe('#useAttendeeStatus / sharingContent', async function () {
        it('should be false - local attendee', async function () {
          await localWindow.run(async () => await page.checkAttendeeState(localAttendeeName, 'sharingContent', false));
        });

        it('should be false - remote attendee', async function () {
          await remoteWindow.run(async () => await page.checkAttendeeState(localAttendeeName, 'sharingContent', false));
        });
      });
    });
  });

  describe('Leave meeting', async function () {
    it('should leave meeting successfully - local attendee', async function () {
      await localWindow.run(async () => await page.leaveMeeting());
      await localWindow.run(async () => await page.checkIfAttendeeHasLeftMeeting());
    });

    it('should leave meeting successfully - remote attendee', async function () {
      await remoteWindow.run(async () => await page.leaveMeeting());
      await remoteWindow.run(async () => await page.checkIfAttendeeHasLeftMeeting());
    });
  });
});
