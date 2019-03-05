import { MODAL_DELETE_SHOW, MODAL_DELETE_HIDE } from '../actions'
import { Map } from 'immutable'

function modal(state = Map({show: false}), action){
  switch (action.type) {
    case MODAL_DELETE_SHOW:
      console.log(action.id, action.name);
      return Map({
        show: true,
        id: action.modal.id,
        name: action.modal.name
      })
    case MODAL_DELETE_HIDE:
    console.log('hide');
      return Map({show: false})
    default:
      return state
  }
}

export default modal
