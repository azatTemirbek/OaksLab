import * as React from 'react';
import {MainRouter} from './router/MainRouter';
import {Provider} from 'react-redux';
import {store, persistor} from './config/store';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider as PaperProvider} from 'react-native-paper';
import {theme} from './config/theme';
import {ThemeProvider} from 'styled-components/native';

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
