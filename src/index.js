
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/App';
import MainPage from './components/MainPage';
import UserRepo from './components/UserRepo';
import reducer from './reducers/index.reducer';
import 'bulma/css/bulma.css';
import 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './css/main.css';
import './css/font-awesome.css';

const logger = createLogger();
const store = createStore(reducer, applyMiddleware(thunk, logger));

ReactDOM.render(<Provider store={store}>
    <Router history={browserHistory}>
        <Route path='/' component={App} >
            <IndexRoute component={MainPage} />
            <Route path=':member/:userrepo' component={UserRepo}/>
        </Route>
    </Router>
</Provider>, document.getElementById('root'));