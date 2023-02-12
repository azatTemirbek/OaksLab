import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {ThemeProvider} from 'styled-components/native';
import {persistor, store} from './config/store';
import {theme} from './config/theme';
import {MainRouter} from './router/MainRouter';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <PaperProvider theme={theme}>
            <MainRouter />
          </PaperProvider>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
