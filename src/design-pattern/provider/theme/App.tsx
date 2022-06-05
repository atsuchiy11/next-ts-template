import { createContext, useState } from 'react';
import Toggle from './Toggle';
import List from './List';

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

export const ThemeContext = createContext({} as ContextType);

export default function App() {
  const [theme, setTheme] = useState<Keys>('dark');

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  const providerValue = {
    theme: themes[theme],
    toggleTheme,
  };

  return (
    <div className={`App theme-${theme}`} data-testid="app">
      <ThemeContext.Provider value={providerValue}>
        <Toggle />
        <List />
      </ThemeContext.Provider>
    </div>
  );
}
