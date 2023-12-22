/* eslint-disable react-refresh/only-export-components */
import { Theme } from '@radix-ui/themes';
import { ThemeProvider, withProviders } from './provider';
import { Routing } from '@/1_pages';
import { themeSelector } from '@entities/theme';
import { useAppSelector } from '@shared/model';

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
