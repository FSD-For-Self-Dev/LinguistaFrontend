/* eslint-disable react-refresh/only-export-components */
import { Theme } from '@radix-ui/themes';
import { ThemeProvider, withProviders } from './provider';
import { Routing } from '../pages';
import { useAppSelector } from '../shared/model';
import { themeSelector } from '../entities/theme';

function App() {
	const { theme } = useAppSelector(themeSelector);

	return (
		<ThemeProvider>
			<Theme appearance={theme}>
				<Routing />
			</Theme>
		</ThemeProvider>
	);
}

export default withProviders(<App />);
