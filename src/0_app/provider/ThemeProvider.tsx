import { createContext, useEffect, useState, ReactNode, useMemo } from 'react';

interface ThemeProviderProps {
  children: ReactNode;
}

interface ThemeContextValue {
  theme: string;
  setTheme: (theme: string) => void;
}

const initialState: ThemeContextValue = {
  theme: 'system',
  setTheme: () => {},
};

const ThemeProviderContext = createContext(initialState);

export default function ThemeProvider({
  children,
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState(
    () => localStorage.getItem('ui-theme') ?? 'system',
  );

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove('light', 'dark');

    if (theme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)')
        .matches
        ? 'dark'
        : 'light';

      root.classList.add(systemTheme);
      return;
    }

    root.classList.add(theme);
  }, [theme]);

  const value: ThemeContextValue = useMemo(
    () => ({
      theme,
      setTheme: (theme: string) => {
        localStorage.setItem('ui-theme', theme);
        setTheme(theme);
      },
    }),
    [theme],
  );

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}
