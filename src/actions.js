import * as firebase from 'firebase';
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
export const FETCH = 'FETCH'
export const FETCH_END = 'FETCH_END'

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

export const fetch = (modal) => {
  return { type: FETCH }
}

export const fetch_end = (modal) => {
  return { type: FETCH_END }
}

export const fetchSongsInitial = () => {
  return (dispatch) => {
    dispatch(fetch())
    var songsReference = firebase.database().ref('songs/')
    return songsReference.once("value",(snapshot) => {
      const songs = snapshot.val()
      for (const prop in songs) {
        const song = songs[prop]
        dispatch(addSong({
          id: prop,
          name: song.name,
          artist: song.artist,
          year: song.year,
        }))
      }
      dispatch(fetch_end())
    })
  }
}

//
// this.props.dispatch(sendingAdd())
// firebase.database().ref('songs/').push(
//   {
//     name: values.name,
//     artist: values.artist,
//     year: values.year,
//   }
// ).then((data) => {
//   this.props.dispatch(addSong({
//     id: data.key,
//     name: values.name,
//     artist: values.artist,
//     year: values.year,
//   }))
//   this.props.dispatch(responseAdd())
//   this.props.history.goBack()
// });
