import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { HashRouter, Route, Routes } from "react-router-dom";
import { Posts } from "./components/Posts";
import { Provider } from "react-redux";
import store from "./store";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store} >
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Posts" element={<Posts />} />
        <Route path="*" element={<p>Page not found</p>} />
      </Routes>
    </HashRouter>
  </Provider>
);
