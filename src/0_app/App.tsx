import { Theme } from '@radix-ui/themes';
import Routing from '@pages/index';
import { useSelector } from 'react-redux';
import { RootState } from '@app/store';
import ThemeProvider from './provider/ThemeProvider';

function App() {
  const { theme } = useSelector((state: RootState) => state.theme);

  return (
    <ThemeProvider>
      <Theme appearance={theme}>
        <Routing />
      </Theme>
    </ThemeProvider>
  );
}

export default App;
