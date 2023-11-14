import { Theme } from '@radix-ui/themes';
import { ThemeProvider, withProviders } from './provider';
import { Routing } from '@pages/index';
import { themeSelector } from '@entities/theme';
import { useAppSelector } from '@shared/model';

// eslint-disable-next-line react-refresh/only-export-components
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

// eslint-disable-next-line react-refresh/only-export-components
export default withProviders(<App />);
