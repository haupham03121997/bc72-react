import { Toaster } from 'react-hot-toast';
import useRouteElements from './routes/useRouteElements';
import ThemeContext from './context/ThemeContext';
import { useState } from 'react';
import { createTheme, CssBaseline } from '@mui/material';
import { ThemeProvider } from '@emotion/react';

import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

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
        <LocalizationProvider dateAdapter={AdapterDayjs}>{routeElements}</LocalizationProvider>
        <Toaster />
        <CssBaseline />
      </ThemeContext.Provider>
    </ThemeProvider>
  );
}

export default App;
