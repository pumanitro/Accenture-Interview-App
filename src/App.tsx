import React, { FunctionComponent } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { CoreTheme } from './global/Themes/CoreTheme';
import { RWDProvider } from './global/RWD';
import { GlobalStyles } from './global/GlobalStyles/GlobalStyles';
import { AppRouter } from './global/AppRouter/AppRouter';
import { Redux } from 'global/Redux/Redux';

const App: FunctionComponent = () => (
  <Redux>
    <ThemeProvider theme={CoreTheme}>
      <RWDProvider>
        <Router>
          <GlobalStyles />
          <AppRouter />
        </Router>
      </RWDProvider>
    </ThemeProvider>
  </Redux>
);

export default App;
