import React, { Component }   from 'react';
import { render }             from 'react-dom';
import { Provider }           from "react-redux";
import store                  from "./store";
import {BrowserRouter,
  Switch,
  Route,
  IndexRoute}                 from "react-router-dom";



import Page from "./Page.jsx";
import Welcome from "./welcome/index.jsx";
import Clusters from "./clusters/index.jsx";
import Workers from "./workers/index.jsx";
import Benchmarks from "./benchmarks/index.jsx";
// todo: add "401" page

const App= (
  <Provider store={store}>
    <BrowserRouter >
      <Page>
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route path="/clusters" component={Clusters} />
          <Route path="/benchmarks" component={Benchmarks} />
          <Route path="/workers" component={Workers} />

        </Switch>
      </Page>
    </BrowserRouter>
  </Provider>);

render(App, document.getElementById('app'));