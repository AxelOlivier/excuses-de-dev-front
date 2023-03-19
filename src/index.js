import React from 'react';
import {
  BrowserRouter, Route, Switch
} from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import HomePage from './containeur/HomePage/HomePage';
import CodeHttpPage from './containeur/CodeHttpPage/CodeHttpPage';
import Error404Page from './containeur/404Page/404Page';
import LostPage from './containeur/LostPage/LostPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Switch>
          <Route path="/lost">
            <LostPage />
          </Route>
          <Route path="/$:id">
            <CodeHttpPage />
          </Route>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/*">
            <Error404Page />
          </Route>
    </Switch>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
