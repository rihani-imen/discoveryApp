import React from "react";

import ReactDOM from "react-dom";

import { Provider } from "react-redux";

import { applyMiddleware, createStore } from "redux";

import thunk from "redux-thunk";

import { composeWithDevTools } from "redux-devtools-extension";

import { BrowserRouter } from "react-router-dom";

import App from "./App";
import rootReducer from "./reducers";

import { getPosts } from "./actions/post.actions";
import { getUsers } from "./actions/users.action";
import "./styles/index.scss";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

store.dispatch(getUsers());
store.dispatch(getPosts());

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);