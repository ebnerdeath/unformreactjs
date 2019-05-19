import React, { Fragment } from "react";
import { Provider } from "react-redux";
import Form from "./pages/Unform";

import "./config/reactotron";

import GlobalStyle from "./styles/global";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Fragment>
        <GlobalStyle />
        <Form />
      </Fragment>
    </Provider>
  );
}

export default App;
