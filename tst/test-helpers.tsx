import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import React from 'react';

export const renderWithTheme = (theme: any, children: JSX.Element) => render(
    <ThemeProvider theme={theme}>
        {children}
    </ThemeProvider>
);