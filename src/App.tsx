import * as React from 'react';
import {MainRouter} from './router/MainRouter';
import {Provider} from 'react-redux';
import {store, persistor} from './config/store';
import {PersistGate} from 'redux-persist/integration/react';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <MainRouter />
      </PersistGate>
    </Provider>
  );
}

export default App;
