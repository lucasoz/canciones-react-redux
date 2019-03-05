import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { addSong } from './actions.js'
import 'semantic-ui-css/semantic.min.css'
import './index.css'
import reducers from './reducers/index'
import * as firebase from 'firebase';

var config = {
  apiKey: "AIzaSyD21SBEItTg2KHXPyBgY3iExl2qBnw4smo",
  authDomain: "canciones-react-redux.firebaseapp.com",
  databaseURL: "https://canciones-react-redux.firebaseio.com",
  projectId: "canciones-react-redux",
  storageBucket: "canciones-react-redux.appspot.com",
  messagingSenderId: "973929143346"
};

firebase.initializeApp(config);

let store = createStore(reducers)
store.dispatch(addSong({
  id:1,
  name:'Encantadora',
  artist:'Yandel',
  year:2015
}))
store.dispatch(addSong({
  id:2,
  name:'Hotline Bling',
  artist:'Drake',
  year:2015
}))
store.dispatch(addSong({
  id:3,
  name:'Ella Quiere Beber',
  artist:'Anuel AA',
  year:2018
}))
store.dispatch(addSong({
  id:4,
  name:'Te Quiero Pa´Mi',
  artist:'Don Omar, Zion & Lennox',
  year:2017
}))
store.dispatch(addSong({
  id:5,
  name:'Kevinho e MC Kekel',
  artist:'O Bebê',
  year:2018
}))

ReactDOM.render(
  <Provider store={store}>
    <div className="center">
      <App />
    </div>
  </Provider>
 , document.getElementById('root'));
