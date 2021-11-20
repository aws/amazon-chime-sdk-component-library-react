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
      </Routes>
    </BrowserRouter >
  </ThemeProvider>
);

export const routes = {
  HOME: '/',
  ROSTER_TEST: 'roster-test',
};

export default App;
