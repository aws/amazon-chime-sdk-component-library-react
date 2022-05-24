import React from 'react';
import { Heading } from 'amazon-chime-sdk-component-library-react';
import { routes } from '../app';
import TestApp from '../components/TestApp';

export const Home: React.FC = () => (
  <>
    <Heading level={4}>
      React Component Library Test Demo
    </Heading>
    <ul>
      <TestApp
        name='Roster Test App'
        route={routes.ROSTER_TEST}
        components={['RosterAttendee']}
        hooks={[
          'useRosterState',
          'useAttendeeStatus',
          'useAttendeeAudioStatus',
        ]}
      />
      <TestApp
        name='Video Filter Test App'
        route={routes.VIDEO_FILTER_TEST}
        components={[
          `BackgroundBlurProvider`,
        ]}
        hooks={[
          `useBackgroundBlur`,
        ]}
        />
    </ul>
  </>
);
