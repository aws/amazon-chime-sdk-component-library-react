import React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { ConsoleLogger, LogLevel } from 'amazon-chime-sdk-js';
import {
  LoggerProvider,
  useLogger,
} from '../../../src/providers/LoggerProvider';

describe('useLogger', () => {
  it('should provide logger if LoggerProvider is used', () => {
    const logger = new ConsoleLogger('SDK', LogLevel.ERROR);
    const { result } = renderHook(() => useLogger(), {
      wrapper: ({ children }) => (
        <LoggerProvider logger={logger}>{children}</LoggerProvider>
      ),
    });
    expect(result.current.getLogLevel()).toBe(LogLevel.ERROR);
  });

  it('should provide default ConsoleLogger with INFO log level if LoggerProvider is not used', () => {
    const { result } = renderHook(() => useLogger());
    expect(result.current.getLogLevel()).toBe(LogLevel.INFO);
  });
});
