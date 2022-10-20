# README - React Testing Demo

The React Testing Demo is used to test the Amazon Chime SDK React Components Library.

Different tests may require different testing demos. Creating a new testing demo for each test would add extra maintenance work. We don't like it.

Following the example of [WebRTC samples](https://webrtc.github.io/samples/), we come up with the concept of a Mini Test App - a minimalist, single-page application containing only the necessary components for a single test. All Mini Test Apps are sub-pages of the React Testing Demo.

## Guideline

If you want to add tests for a new group of related features, build a new Mini Test App.

* For example, there is only a "Roster Test App". If you want to add tests for video features, you should build a "Video Test App".

If there is already an existing Mini Test App for the features that you are working on, you should add onto the Mini Test App.

* For example, there is only a "Roster Test App". If you want to add tests for a new `useRosterSize` hook which returns the size of the roster, you should improve the "Roster Test App" to cover that hook.

## Run the React Testing Demo Locally

1. If you have not configured your AWS credentials yet, do a [quick configuration](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-quickstart.html).
2. Install the dependencies: `npm install`.
3. Start the webpack server and node server concurrently: `npm start`.
4. Open <http://localhost:9000/> in your browser.

## Add a New Mini Test App

1. Implement a new Mini Test App under `pages` folder.
   * You could reuse the components and containers to facilitate your development.

2. Create a new route for Mini Test App in `src/app.tsx`.

    ```tsx
    import React from 'react';
    import { BrowserRouter, Route, Routes } from 'react-router-dom';
    import { lightTheme } from 'amazon-chime-sdk-component-library-react';
    import { ThemeProvider } from 'styled-components';
    import { Home } from './pages/Home';
    import { RosterTestApp } from './pages/RosterTestApp';
    
    const App: React.FC = () => (
      <ThemeProvider theme={lightTheme}>
        <BrowserRouter>
          <Routes>
            <Route path={routes.HOME} element={<Home />} />
            <Route path={routes.ROSTER_TEST} element={<RosterTestApp />} />
            {/* Add <Route> to new Mini Test App below */}
          </Routes>
        </BrowserRouter >
      </ThemeProvider>
    );
    
    export const routes = {
      HOME: '/',
      ROSTER_TEST: 'roster-test',
      // Add new routes below
    };
    ```

3. Add the new Mini Test App to `pages/Home.tsx` using `TestApp` component.
    * `name`: The name of the Mini Test App.
    * `route`: The route to the Mini Test App.
    * `components`: The components tested in this Mini Test App.
    * `hooks`: The hooks tested in this Mini Test App.

    ```tsx
    import React from 'react';
    import { Heading } from 'amazon-chime-sdk-component-library-react';
    import { routes } from '../app';
    import TestApp from '../components/TestApp';
    
    export const Home: React.FC = () => (
      <>
        <Heading level={4}>React Component Library Test Demo</Heading>
        <ul>
          <TestApp
            name='Roster Test'
            route={routes.ROSTER_TEST}
            components={['RosterAttendee']}
            hooks={[
              'useRosterState',
              'useAttendeeStatus',
              'useAttendeeAudioStatus',
              'useAudioVideo',
            ]}
          />
          {/* Add new links to Mini Test App below */}
        </ul>
      </>
    );
    ```
