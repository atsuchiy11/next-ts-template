import ThemeProvider, { useTheme } from './ThemeProvider';
import Toggle from './Toggle';
import List from './List';

export default function App() {
  const { theme } = useTheme();
  return (
    <div className={`App theme-${theme}`}>
      <ThemeProvider>
        <Toggle />
        <List />
      </ThemeProvider>
    </div>
  );
}
