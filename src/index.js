import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore} from 'redux'
import songs from './reducers/reducers'
import { Provider } from 'react-redux'
import { addSong } from './actions.js'
import 'semantic-ui-css/semantic.min.css'
import './index.css'

let store = createStore(songs)
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
</Provider> , document.getElementById('root'));
