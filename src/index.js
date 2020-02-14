import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import Layout from "./layouts/Layout";
import Main from "./components/Main";
import About from "./components/About";
import Contacts from "./components/Contacts";
import PageNotFound from "./components/PageNotFound";


ReactDOM.render(<Router history={browserHistory}>
  <Route path="/" component={Layout}>
    <IndexRoute component={Main}/>
    <Route path="about" component={About}/>
    <Route path="contacts" component={Contacts}/>
    <Route path="contacts/:number" component={Contacts}/>
    <Route path="*" component={PageNotFound}/>
  </Route>
</Router>, document.getElementById('root'));
serviceWorker.unregister();
