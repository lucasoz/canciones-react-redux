import React from 'react'
import { Button, Header, Icon, Modal } from "semantic-ui-react";
import { connect } from "react-redux";

class SongDelete extends  React.Component {

    constructor(props){
        super(props)
        this.modalDeleteHide = this.modalDeleteHide.bind(this)
        this.userDelete = this.userDelete.bind(this)
    }
    render(){
        return(
            <Modal basic size='small' open={this.props.modal_delete.show}>
                <Header icon='archive' content='Alerta' />
                <Modal.Content>
                    <p>
                        ¿Quieres eliminar el usuario  {this.props.modal_delete.username}?
                    </p>
                </Modal.Content>
                <Modal.Actions>
                    <Button basic color='red' inverted onClick={this.modalDeleteHide}>
                        <Icon name='remove' /> No
                    </Button>
                    <Button color='green' inverted onClick={this.userDelete}>
                        <Icon name='checkmark' /> Si
                    </Button>
                </Modal.Actions>
            </Modal>
        )
    }

    modalDeleteHide(event){
        this.props.dispatch({
            type: 'users.modalDeleteHide',
        })
    }

    userDelete(event){
        this.props.dispatch({
            type: '',
            id: this.props.modal_delete.id
        })

        this.props.dispatch({
            type: 'users.modalDeleteHide',
        })
    }
}


function mapStateToProps(state) {
    let modal_delete;
    if (state.users.modal && state.users.modal.list_delete){
        modal_delete = state.users.modal.list_delete
    }else{
        modal_delete = {
            show: false,
            id: 0,
            username: '',
        }
    }

    return {
        modal_delete: modal_delete
    }
}

export default connect(mapStateToProps)(SongDelete)
