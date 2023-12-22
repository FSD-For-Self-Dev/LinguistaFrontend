import { Provider } from 'react-redux';
import { store } from '../store';
import { ReactNode } from 'react';

export const WithStore = (component: ReactNode) => {
  return <Provider store={store}>{component}</Provider>;
};
