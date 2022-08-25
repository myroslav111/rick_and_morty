import Navigation from './Navigation';
import ContainerContent from './ContainerContent';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({});

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Navigation />
        <ContainerContent />
      </div>
    </ThemeProvider>
  );
};

export default App;
