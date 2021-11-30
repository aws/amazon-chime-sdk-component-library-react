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
    if (state === "failed") {
      failureCount += 1;
    }
  });

  after(async function () {
    const passed = failureCount === 0;
    await chromeDriverFactory.quit(passed);
    await firefoxDriverFactory.quit(passed);
  });

  describe('Load App', async function () {
    it('chrome', async function () {
      await localPage.load('/roster-test');
      await localPage.checkIfAppLoaded();
    });

    it('firefox', async function () {
      await remotePage.load('/roster-test');
      await remotePage.checkIfAppLoaded();
    });
  });

  describe('Join Meeting', async function () {
    it('local attendee', async function () {
      await localPage.enterMeetingInfo(meetingId, localAttendeeName);
      await localPage.joinMeeting();
      await localPage.checkIfAttendeeHasJoinedMeeting();
    });

    it('remote attendee', async function () {
      await remotePage.enterMeetingInfo(meetingId, remoteAttendeeName);
      await remotePage.joinMeeting();
      await remotePage.checkIfAttendeeHasJoinedMeeting();
    });
  });

  describe('Attendee Presence', async function () {
    describe('#length', async function () {
      describe('component', async function () {
        it('has length of 2', async function () {
          await localPage.checkRosterLength(2);
        });
      });

      describe('hook', async function () {
        it('has length of 2', async function () {
          await localPage.checkLengthOfAttendeeStates(2);
        });

        it('`chimeAttendeeId` of local attendee is not empty', async function () {
          await localPage.checkAttendeeState(localAttendeeName, 'chimeAttendeeId', '', false);
        });

        it('`chimeAttendeeId` of remote attendee is not empty', async function () {
          await localPage.checkAttendeeState(remoteAttendeeName, 'chimeAttendeeId', '', false);
        });

        it('`externalUserId` of local attendee is not empty', async function () {
          await localPage.checkAttendeeState(localAttendeeName, 'externalUserId', '', false);
        });

        it('`externalUserId` of remote attendee is not empty', async function () {
          await localPage.checkAttendeeState(remoteAttendeeName, 'externalUserId', '', false);
        });

        it('`signalStrength` of local attendee is 1', async function () {
          await localPage.checkAttendeeState(localAttendeeName, 'signalStrength', 1);
        });

        it('`signalStrength` of remote attendee is 1', async function () {
          await localPage.checkAttendeeState(localAttendeeName, 'signalStrength', 1);
        });
      });
    });

    describe('#name', async function () {
      describe('component', async function () {
        it('has name of local attendee', async function () {
          await localPage.checkIfAttendeeIsInRoster(localAttendeeName);
        });

        it('has name of remote attendee', async function () {
          await localPage.checkIfAttendeeIsInRoster(remoteAttendeeName);
        });
      });

      describe('hook', async function () {
        it('has name of local attendee', async function () {
          await localPage.checkAttendeeState(localAttendeeName, 'name', localAttendeeName);
        });

        it('has name of remote attendee', async function () {
          await localPage.checkAttendeeState(remoteAttendeeName, 'name', remoteAttendeeName);
        });
      });
    });
  });

  describe('Microphone', async function () {
    describe('mute', async function () {
      before(async function () {
        await localPage.toggleMicrophone();
      });

      describe('component', async function () {
        it('local attendee has muted microphone icon', async function () {
          await localPage.checkMicrophoneIcon(localAttendeeName, true);
        });

        it('remote attendee has muted microphone icon', async function () {
          await remotePage.checkMicrophoneIcon(localAttendeeName, true);
        });
      });

      describe('hook', async function () {
        it('`muted` of local attendee is `true`', async function () {
          await localPage.checkAttendeeState(localAttendeeName, 'muted', true);
        });

        it('`muted` of remote attendee is `true`', async function () {
          await remotePage.checkAttendeeState(localAttendeeName, 'muted', true);
        });
      });
    });

    describe('unmute', async function () {
      before(async function () {
        await localPage.toggleMicrophone();
      });

      describe('component', async function () {
        it('local attendee has unmuted microphone icon', async function () {
          await localPage.checkMicrophoneIcon(localAttendeeName, false);
        });

        it('remote attendee has unmuted microphone icon', async function () {
          await remotePage.checkMicrophoneIcon(localAttendeeName, false);
        });
      });

      describe('hook', async function () {
        it('`muted` of local attendee is `false`', async function () {
          await localPage.checkAttendeeState(localAttendeeName, 'muted', false);
        });

        it('`muted` of remote attendee is `false`', async function () {
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

      describe('component', async function () {
        it('local attendee has enabled video icon', async function () {
          await localPage.checkVideoIcon(localAttendeeName, true);
        });

        it('remote attendee has enabled video icon', async function () {
          await remotePage.checkVideoIcon(localAttendeeName, true);
        });
      });

      describe('hook', async function () {
        it('`videEnabled` of local attendee is `true`', async function () {
          await localPage.checkAttendeeState(localAttendeeName, 'videoEnabled', true);
        });

        it('`videEnabled` of remote attendee is `true`', async function () {
          await remotePage.checkAttendeeState(localAttendeeName, 'videoEnabled', true);
        });
      });
    });

    describe('disable', async function () {
      before(async function () {
        await localPage.toggleVideo();
      });

      describe('component', async function () {
        it('local attendee has disabled video icon', async function () {
          await localPage.checkVideoIcon(localAttendeeName, false);
        });

        it('remote attendee has disabled video icon', async function () {
          await remotePage.checkVideoIcon(localAttendeeName, false);
        });
      });

      describe('hook', async function () {
        it('`videEnabled` of local attendee is `false`', async function () {
          await localPage.checkAttendeeState(localAttendeeName, 'videoEnabled', false);
        });

        it('`videEnabled` of remote attendee is `false`', async function () {
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

      describe('component', async function () {

      });

      describe('hook', async function () {
        it('local attendee is sharing content', async function () {
          await localPage.checkAttendeeState(localAttendeeName, 'sharingContent', true);
        });

        it('remote attendee is sharing content', async function () {
          await remotePage.checkAttendeeState(localAttendeeName, 'sharingContent', true);
        });
      });
    });

    describe('stop', async function () {
      before(async function () {
        await localPage.toggleContent();
      });
      describe('component', async function () {

      });

      describe('hook', async function () {
        it('local attendee is not sharing content', async function () {
          await localPage.checkAttendeeState(localAttendeeName, 'sharingContent', false);
        });

        it('remote attendee is not sharing content', async function () {
          await remotePage.checkAttendeeState(localAttendeeName, 'sharingContent', false);
        });
      });
    });
  });

  describe('Leave meeting', async function () {
    it('Chrome - leave meeting', async function () {
      await localPage.leaveMeeting();
      await localPage.checkIfAttendeeHasLeftMeeting();
    });

    it('Firefox - leave meeting', async function () {
      await remotePage.leaveMeeting();
      await remotePage.checkIfAttendeeHasLeftMeeting();
    });
  });
});
