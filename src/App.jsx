import { Toaster } from 'react-hot-toast';
import useRouteElements from './routes/useRouteElements';
import ThemeContext from './context/ThemeContext';
import { useState } from 'react';
import { createTheme, CssBaseline } from '@mui/material';
import { ThemeProvider } from '@emotion/react';

function App() {
  const routeElements = useRouteElements();

  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });

  const themeMode = createTheme({
    palette: {
      mode: theme,
    },
  });

  return (
    <ThemeProvider theme={themeMode}>
      <ThemeContext.Provider value={[theme, setTheme]}>
        {routeElements}
        <Toaster />
        <CssBaseline />
      </ThemeContext.Provider>
    </ThemeProvider>
  );
}

export default App;
