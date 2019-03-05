/*
Only need a reducer for songs
*/
import { ADD_SONG, EDIT_SONG, DELETE_SONG } from '../actions'
import { List } from 'immutable'

function songs(state = List(), action){
  const old_state = state.toJS()
  let new_state = List()
  let i
  switch (action.type) {
    case ADD_SONG:
      const new_song = {
        id: action.song.id,
        name: action.song.name,
        artist: action.song.artist,
        year: action.song.year,
      }
      return state.push(new_song)
    case EDIT_SONG:
      for (i = 0; i < old_state.length; i++) {
        let old_song = old_state[i]
        if (old_song.id === action.song.id) {
          let edit_song = {
            id: action.song.id,
            name: action.song.name,
            artist: action.song.artist,
            year: action.song.year,
          }
          new_state = new_state.push(edit_song)
        } else {
          new_state = new_state.push(old_state[i])
        }
      }
      return new_state
    case DELETE_SONG:
      for (i = 0; i < old_state.length; i++) {
        let old_song = old_state[i]
        if (old_song.id !== action.song.id) {
          new_state = new_state.push(old_state[i])
        }
      }
      return new_state
    default:
      return state
  }

}

export default songs
