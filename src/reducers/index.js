import { combineReducers } from 'redux'
import songs from './songs'
import modal from './modal'
import async from './async'
import fetch from './fetchSongs'
import { reducer as formReducer} from 'redux-form'

export default combineReducers({
  songs: songs,
  modal: modal,
  async: async,
  fetch: fetch,
  form: formReducer,
})
