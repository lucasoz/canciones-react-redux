/*
Action types
*/

export const SENDING_ADD = 'SENDING_ADD'
export const RESPONSE_ADD = 'RESPONSE_ADD'
export const ADD_SONG = 'ADD_SONG'
export const EDIT_SONG = 'EDIT_SONG'
export const DELETE_SONG = 'DELETE_SONG'
export const MODAL_DELETE_SHOW = 'MODAL_DELETE_SHOW'
export const MODAL_DELETE_HIDE = 'MODAL_DELETE_HIDE'

export const addSong = (song) => {
  return {type: ADD_SONG, song }
}

export const sendingAdd = () => {
  return {type: SENDING_ADD }
}

export const responseAdd = () => {
  return {type: RESPONSE_ADD }
}


export const editSong = (song) => {
  return { type: EDIT_SONG , song }
}

export const deleteSong = (song) => {
  return { type: DELETE_SONG, song }
}

export const modalDeleteShow = (modal) => {
  return { type: MODAL_DELETE_SHOW, modal }
}

export const modalDeleteHide = (modal) => {
  return { type: MODAL_DELETE_HIDE }
}
