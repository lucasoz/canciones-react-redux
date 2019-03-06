import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, applyMiddleware  } from 'redux'
import { Provider } from 'react-redux'
import { fetchSongsInitial } from './actions.js'
import 'semantic-ui-css/semantic.min.css'
import './index.css'
import reducers from './reducers/index'
import * as firebase from 'firebase';
import thunkMiddleware from 'redux-thunk'

var config = {
  apiKey: "AIzaSyD21SBEItTg2KHXPyBgY3iExl2qBnw4smo",
  authDomain: "canciones-react-redux.firebaseapp.com",
  databaseURL: "https://canciones-react-redux.firebaseio.com",
  projectId: "canciones-react-redux",
  storageBucket: "canciones-react-redux.appspot.com",
  messagingSenderId: "973929143346"
};

firebase.initializeApp(config);

let store = createStore(
  reducers,
  applyMiddleware(thunkMiddleware)
)


store.dispatch(fetchSongsInitial())

ReactDOM.render(
<Provider store={store}>
  <div className="center">
    <App />
  </div>
</Provider>
, document.getElementById('root'));
