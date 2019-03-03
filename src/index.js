import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore} from 'redux'
import songs from './reducers'
import { Provider } from 'react-redux'
import { ADD_SONG, DELETE_SONG, EDIT_SONG }from './actions'

let store = createStore(songs)

ReactDOM.render(
<Provider store={store}>
  <App />
</Provider> , document.getElementById('root'));
