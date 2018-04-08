import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Router, Route, browserHistory } from 'react-router';
import ContentBox from './components/content-view';

ReactDOM.render(
    (<Router history={browserHistory}>
        <Route path="/" component={App}>
            <Route path="/characters/:page" component={ContentBox}/>
            <Route path="/locations"/>
            <Route path="/episodes"/>
            <Route path="/about"/>
        </Route>
    </Router>),
    document.getElementById('root')
);
registerServiceWorker();
