import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore } from "redux";
import { Provider } from "react-redux";
import postReducer from "./reducers/postReducer";

const store = createStore(postReducer);

ReactDOM.render(
  <Provider store={store}>
    , <App />
  </Provider>,
  document.getElementById("root")
);


/*El componente proveedor utiliza algo llamado REACT CONTEXT que le permite pasar el objeto
de la tienda a cualquier componente que necesite acceder a él sin necesidad de pasar puntales. */