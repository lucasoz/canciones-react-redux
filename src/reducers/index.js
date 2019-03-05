import { combineReducers } from 'redux'
import songs from './songs'
import modal from './modal'
import { reducer as formReducer} from 'redux-form'

export default combineReducers({
  songs: songs,
  modal: modal,
  form: formReducer
})
