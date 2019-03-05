import React from 'react'
import { Button, Header, Icon, Modal } from "semantic-ui-react";
import { connect } from "react-redux";
import { modalDeleteHide, deleteSong } from '../actions.js'

class SongDelete extends  React.Component {

    constructor(props){
        super(props)
        this.modalDeleteHide = this.modalDeleteHide.bind(this)
        this.delete = this.delete.bind(this)
    }
    render(){
        return(
            <Modal basic size='small' open={this.props.modal.show}>
                <Header icon='archive' content='Alerta' />
                <Modal.Content>
                    <p>
                        Do you want to delete  {this.props.modal.name} ?
                    </p>
                </Modal.Content>
                <Modal.Actions>
                    <Button basic color='red' inverted onClick={this.modalDeleteHide}>
                        <Icon name='remove' /> No
                    </Button>
                    <Button color='green' inverted onClick={this.delete}>
                        <Icon name='checkmark' /> Si
                    </Button>
                </Modal.Actions>
            </Modal>
        )
    }

    modalDeleteHide(event){
        this.props.dispatch(modalDeleteHide())
    }

    delete(event){
        this.props.dispatch(deleteSong({id:this.props.modal.id}))
        this.props.dispatch(modalDeleteHide())
    }
}


function mapStateToProps(state) {
    console.log('dawd');
    let modal = state.modal.toJS()
    console.log(modal);
    return { modal: modal }
}

export default connect(mapStateToProps)(SongDelete)
