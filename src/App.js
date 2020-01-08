import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'

import IndexController from './containers/Index/IndexController';

const store =createStore(rootReducer,applyMiddleware(thunk));

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path='/' exact component ={IndexController}/>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
