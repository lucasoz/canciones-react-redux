import { SENDING_ADD, RESPONSE_ADD } from '../actions'
import { Map } from 'immutable'

function modal(state = Map({charging: false}), action){
  switch (action.type) {
    case SENDING_ADD:
      return Map({
        charging: true,
      })
    case RESPONSE_ADD:
      return Map({charging: false})
    default:
      return state
  }
}

export default modal
