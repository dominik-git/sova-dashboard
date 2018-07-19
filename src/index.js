import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import theme from "./styles/themes/default";
import configureStore from "./store/index";

import App from "./App";

const initialState = {};
const store = configureStore(initialState);

const Root = () => (
  <Provider store={store}>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </Provider>

);

ReactDOM.render(<Root />, document.getElementById("root"));
