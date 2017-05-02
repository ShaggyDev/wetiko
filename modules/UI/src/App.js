import React, { Component } from 'react';
import { render } from 'react-dom';
import {BrowserRouter,
  Route,
  IndexRoute,
  IndexRedirect}   from "react-router-dom";


import Page from "./Page.jsx";
import Workers from "./workers/index.jsx";
import Benchmarks from "./benchmarks/index.jsx";

const App= (
  <BrowserRouter >
    <Page>
      <Route exact path="/" component={Benchmarks} />
      <Route path="/workers" component={Workers} />
    </Page>
  </BrowserRouter>);

render(App, document.getElementById('app'));