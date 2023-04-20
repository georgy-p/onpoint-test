import Root from './components/Root';
import ThemeProvider from './components/ThemeProvider';

const App = () => {
  return (
    <ThemeProvider>
      <Root />
    </ThemeProvider>
  );
};

export default App;
