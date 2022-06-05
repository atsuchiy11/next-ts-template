import { useTheme } from './ThemeProvider';

export default function Toggle() {
  const theme = useTheme();

  return (
    <label className="switch">
      <input type="checkbox" onClick={theme.toggleTheme} />
      <span className="slider round" />
    </label>
  );
}
