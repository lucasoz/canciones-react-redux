import { MODAL_DELETE_SHOW, MODAL_DELETE_HIDE } from '../actions'
import { Map } from 'immutable'

function modal(state = Map({show: false}), action){
  switch (action.type) {
    case MODAL_DELETE_SHOW:
      return Map({
        show: true,
        id: action.modal.id,
        name: action.modal.name
      })
    case MODAL_DELETE_HIDE:
      return Map({show: false})
    default:
      return state
  }
}

export default modal
