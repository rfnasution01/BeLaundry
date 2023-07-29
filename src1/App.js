import { ThemeProvider } from '@mui/material';
import { Provider } from 'react-redux';
import Routing from './routes';
import { theme } from './configs/theme';
import store from './features/store';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Routing />
      </Provider>
    </ThemeProvider>
  );
}

export default App;
