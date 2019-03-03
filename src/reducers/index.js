import { MODAL_DELETE_SHOW, MODAL_DELETE_HIDE } from '../actions'
import { combineReducers } from 'redux'
import songs from './reducers'
import { Map } from 'immutable'

function modal(state = Map(), action){
  const old_state = state.toJS()
  let new_state = Map()

  switch (action.type) {
    case MODAL_DELETE_SHOW:
      return Map({
        show: true,
        id: action.id,
        name: action.name
      })
    default:
      return state
  }

}

export default modal

export const reducers = combineReducers({
  songs: songs,
  modal: modal
})
