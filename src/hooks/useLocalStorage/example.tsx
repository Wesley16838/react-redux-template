import useLocalStorage from './useLocalStorage';
const Example = () => {
  // setting default theme to light
  const [theme, setTheme] = useLocalStorage('theme', 'light');
  return (
    <div>
      <p>Current theme is {theme}</p>
      <button onClick={() => setTheme('dark')}>
        Change theme to dark
      </button>
    </div>
  );
}

export default Example;