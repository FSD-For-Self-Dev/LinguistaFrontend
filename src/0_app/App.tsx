/* eslint-disable react-refresh/only-export-components */
import { useEffect } from 'react';
import { Theme } from '@radix-ui/themes';
import { ThemeProvider, withProviders } from './provider';
import { Routing } from '@pages/index';
import { login, sessionSelector } from '@entities/session';
import { themeSelector } from '@entities/theme';
import { api } from '@entities/words/api';
import { useAppSelector, useAppDispatch } from '@shared/model';
import { user } from '@shared/lib/mockUser';

function App() {
	const { theme } = useAppSelector(themeSelector);
	const { sessionKey } = useAppSelector(sessionSelector);

	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(login(user));
		/* eslint-disable-next-line react-hooks/exhaustive-deps */
	}, []);

	useEffect(() => {
		if (sessionKey) {
			api.getVocabulary(sessionKey);
		}
	}, [sessionKey]);

	return (
		<ThemeProvider>
			<Theme appearance={theme}>
				<Routing />
			</Theme>
		</ThemeProvider>
	);
}

export default withProviders(<App />);
