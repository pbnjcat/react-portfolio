import { MantineProvider, localStorageColorSchemeManager } from '@mantine/core';
import { theme } from './theme';
import { Router } from './Router';

import '@mantine/core/styles.css';
import './styles/main.scss';
function App() {
  return (
    <>
      <MantineProvider theme={theme}>
        <Router />
      </MantineProvider>
    </>
  );
}

export default App;
