import { FETCH, FETCH_END } from '../actions'
import { Map } from 'immutable'

function modal(state = Map({show: false}), action){
  switch (action.type) {
    case FETCH:
      return Map({show: true})
    case FETCH_END:
      return Map({show: false})
    default:
      return state
  }
}

export default modal
