import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { ThemeProvider } from "styled-components";
import { persistor, store } from "./config/store";
import { theme } from "./config/theme";
import { MainRouter } from "./router/MainRouter";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <MainRouter />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
