import { ReactNode } from 'react';
import WithRouter from './withRouter';
import WithStore from './withStore';

const withProviders = (component: ReactNode) => {
  return WithRouter(WithStore(component));
};

export default withProviders;
