/* eslint-disable react-refresh/only-export-components */
import { Theme } from '@radix-ui/themes';
import { ThemeProvider, withProviders } from './provider';
import { Routing } from '../1_pages';
import { themeSelector } from '../4_entities/theme';
import { useAppSelector } from '../5_shared/model';
// test
import { useEffect } from 'react';
import { api } from '@entities/session/api/index';

function App() {
	const { theme } = useAppSelector(themeSelector);

	useEffect(() => {
		api.login({ username: 'test_user1', email: 'user@exemple.com', password: 'string123' });
	}, []);

	return (
		<ThemeProvider>
			<Theme appearance={theme}>
				<Routing />
			</Theme>
		</ThemeProvider>
	);
}

export default withProviders(<App />);
