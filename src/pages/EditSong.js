import React from 'react'
import { Header } from 'semantic-ui-react'
import { Button, Form, Message } from 'semantic-ui-react'
import { Field, reduxForm } from 'redux-form'
import { connect } from "react-redux";
import { sendingAdd, editSong, responseAdd } from '../actions'
import * as firebase from 'firebase';

class EditSong extends React.Component {
  form_type
  constructor(props){
      super(props)
      this.form_type = 'edit';
      this.formSubmit = this.formSubmit.bind(this)
  }
  render(){
    return(
      <div>
        <Header size="huge">Song edit</Header>
        <Form loading={this.props.charging} onSubmit={this.props.handleSubmit(this.formSubmit)}>
            <Field name="name" component={EditSong.renderName}/>
            <Field name="artist" component={EditSong.renderArtist}/>
            <Field name="year" component={EditSong.renderYear}/>
            <Button type='submit' disabled={this.props.invalid || this.props.submitting}>
                Submit
            </Button>
        </Form>
      </div>
    )
  }
  static renderName(props){
    return(
      <Form.Field error={props.meta.touched ? props.meta.error ? true : false :false}>
        <label>Name</label>
        <input {...props.input} placeholder='Name' id="name" type="text"/>
        {props.meta.touched && (props.meta.error ? (<Message negative>
            {props.meta.error}
        </Message>) : null)}
      </Form.Field>
    )
  }
  static renderArtist(props){
    return(
      <Form.Field error={props.meta.touched ? props.meta.error ? true : false :false}>
        <label>Artist</label>
        <input {...props.input} placeholder='Artist' id="artist" type="text"/>
        {props.meta.touched && (props.meta.error ? (<Message negative>
            {props.meta.error}
        </Message>) : null)}
      </Form.Field>
    )
  }
  static renderYear(props){
    return(
      <Form.Field error={props.meta.touched ? props.meta.error ? true : false :false}>
        <label>Year</label>
        <input {...props.input} placeholder='Year' id="year" type="number"/>
        {props.meta.touched && (props.meta.error ? (<Message negative>
            {props.meta.error}
        </Message>) : null)}
      </Form.Field>
    )
  }
  formSubmit(values){
    this.props.dispatch(sendingAdd())
    firebase.database().ref('songs/'+values.id).update(
      {
        name: values.name,
        artist: values.artist,
        year: values.year,
      }
    ).then((data) => {
      this.props.dispatch(editSong({
        id: values.id,
        name: values.name,
        artist: values.artist,
        year: values.year,
      }))
      this.props.dispatch(responseAdd())
      this.props.history.goBack()
    });

  }
}

EditSong = reduxForm({
    form: 'edit_song',
    validate: function (values) {
        const errors = {};
        if (!values.name){
            errors.name = 'Name is required';
        } else if(!values.artist){
            errors.artist = 'Artist is required';
        } else if(!values.year) {
            errors.year = 'Year is required';
        }
        return errors;
    }
})(EditSong);

const mapStateToProps = (state, ownProps) => {
  const id_url = ownProps.match.params.id
  let songInitial = {
    id: 0,
    name: '',
    artist: '',
    year: 0,
  }
  const songs = state.songs.toJS()
  let match = false
  for (let i = 0; i < songs.length; i++) {
    let song = songs[i]
    if (song.id === id_url) {
      songInitial = song
      match = true
    }
  }
  if (!match) {
    ownProps.history.push('/not_found')
  }
  return {
    initialValues: songInitial,
    charging: state.async.toJS().charging,
  }
}

export default connect(mapStateToProps)(EditSong)
