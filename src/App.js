import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { Paper } from '@mui/material';
import AppRoutes from './routes/Index';
import { lightTheme, darkTheme } from './styles/Theme';


function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Paper style={{ minHeight : "100vh" }}>
        <AppRoutes></AppRoutes>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
