import { FC, createContext, ReactNode, useState, useContext } from 'react';

type Keys = 'light' | 'dark';
type Theme = {
  background: string;
  color: string;
};

type Themes = {
  [key in Keys]: Theme;
};

type ContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

const themes: Themes = {
  light: {
    background: '#fff',
    color: '#000',
  },
  dark: {
    background: '#171717',
    color: '#fff',
  },
};

const ThemeContext = createContext({} as ContextType);

export const useTheme = () => {
  const theme = useContext(ThemeContext);
  if (!theme) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return theme;
};

type Props = {
  children: ReactNode;
};

const ThemeProvider: FC<Props> = ({ children }) => {
  const [theme, setTheme] = useState<Keys>('dark');

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  const providerValue = {
    theme: themes[theme],
    toggleTheme,
  };

  return <ThemeContext.Provider value={providerValue}>{children}</ThemeContext.Provider>;
};
export default ThemeProvider;
