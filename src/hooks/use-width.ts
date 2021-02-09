import { Theme, useMediaQuery, useTheme } from '@material-ui/core';
import { Breakpoint } from '@material-ui/core/styles/createBreakpoints';

type BreakpointOrNull = Breakpoint | null;

export const useWidth = (): Breakpoint => {
  const theme: Theme = useTheme();
  const keys: Breakpoint[] = [...theme.breakpoints.keys].reverse();

  return (
    keys.reduce((output: BreakpointOrNull, key: Breakpoint) => {
      const matches = useMediaQuery(theme.breakpoints.up(key));
      return !output && matches ? key : output;
    }, null) || 'xs'
  );
};
