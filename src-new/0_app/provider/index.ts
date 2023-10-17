import { WithRouter } from './withRouter';
import { WithStore } from './withStore';
export { ThemeProvider } from './ThemeProvider';

export const withProviders = (component: React.ReactNode) => {
	return WithRouter(WithStore(component));
};
