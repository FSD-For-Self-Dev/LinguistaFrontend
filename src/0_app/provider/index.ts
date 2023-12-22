import { WithRouter } from './withRouter';
import { WithStore } from './withStore';
import { ReactNode } from 'react';
export { ThemeProvider } from './ThemeProvider';

export const withProviders = (component: ReactNode) => {
  return WithRouter(WithStore(component));
};
