import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { lightTheme } from 'amazon-chime-sdk-component-library-react';
import { ThemeProvider } from 'styled-components';
import { Home } from './pages/Home';
import { RosterTestApp } from './pages/RosterTestApp';
import { VideoFilterTestApp } from './pages/VideoFilterTestApp';


const App: React.FC = () => (
  <ThemeProvider theme={lightTheme}>
    <BrowserRouter>
      <Routes>
        <Route path={routes.HOME} element={<Home />} />
        <Route path={routes.ROSTER_TEST} element={<RosterTestApp />} />
        <Route path={routes.VIDEO_FILTER_TEST} element={<VideoFilterTestApp />} />
      </Routes>
    </BrowserRouter >
  </ThemeProvider>
);

export const routes = {
  HOME: '/',
  ROSTER_TEST: 'roster-test',
  VIDEO_FILTER_TEST: 'video-filter',
};

export default App;
