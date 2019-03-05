import React from 'react'
import { Table, Button } from 'semantic-ui-react'
import {Link} from "react-router-dom";
import { connect } from "react-redux";
import { modalDeleteShow } from '../actions.js'

class SongItem extends React.Component {
    constructor(props){
      super(props)
      this.modalDeleteShow = this.modalDeleteShow.bind(this)
    }
    render(){
      const song = this.props.song
        return(
          <Table.Row>
            <Table.Cell>{song.name}</Table.Cell>
            <Table.Cell>{song.artist}</Table.Cell>
            <Table.Cell>{song.year}</Table.Cell>
            <Table.Cell>
                <Button.Group>
                    <Link to={"/song/"+song.id}>
                        <Button positive>Edit</Button>
                    </Link>
                    <Button.Or></Button.Or>
                    <Button negative data-id={song.id}
                            data-name={song.name}
                            data-artist={song.artist}
                            data-year={song.year}
                            onClick={this.modalDeleteShow}
                    >Delete</Button>
                </Button.Group>
            </Table.Cell>
        </Table.Row>
        )
    }
    modalDeleteShow(event){
      const id = this.props.song.id
      console.log(id);
      const name = this.props.song.name
      console.log(name);
      this.props.dispatch(modalDeleteShow({
         id: id,
         name: name,
      }))
   }
}

export default connect()(SongItem)
