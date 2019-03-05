import React from 'react'
import { Header } from 'semantic-ui-react'
import { Button, Form, Message } from 'semantic-ui-react'
import { Field, reduxForm } from 'redux-form'
import { connect } from "react-redux";
import { addSong } from '../actions'

class AddSong extends React.Component {
  form_type
  constructor(props){
      super(props)
      this.form_type = 'add';
      this.formSubmit = this.formSubmit.bind(this)
  }
  render(){
    return(
      <div>
        <Header size="huge">Song add</Header>
        <Form loading={this.props.submitting} onSubmit={this.props.handleSubmit(this.formSubmit)}>
            <Field name="name" component={AddSong.renderName}/>
            <Field name="artist" component={AddSong.renderArtist}/>
            <Field name="year" component={AddSong.renderYear}/>
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
    this.props.dispatch(addSong({
      id: values.id,
      name: values.name,
      artist: values.artist,
      year: values.year,
    }))

    this.props.history.goBack()
  }
}

AddSong = reduxForm({
    form: 'song_add',
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
})(AddSong);

const mapStateToProps = (state, ownProps) => {
  let songInitial = {
    id: 0,
    name: '',
    artist: '',
    year: 0,
  }
  return {
    initialValues: songInitial
  }
}

export default connect(mapStateToProps)(AddSong)
