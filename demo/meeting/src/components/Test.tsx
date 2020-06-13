import React from 'react';
import {
  PrimaryButton,
  lightTheme,
} from 'amazon-chime-sdk-component-library-react';
import { ThemeProvider } from 'styled-components';

const Test = () => (
  <div>
    <ThemeProvider theme={lightTheme}>
      <PrimaryButton
        className="test-primary-button"
        label="Test Primary Button"
      />
    </ThemeProvider>
  </div>
);

export default Test;
