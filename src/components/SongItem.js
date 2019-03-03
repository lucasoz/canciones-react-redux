import React from 'react'
import { Table, Button } from 'semantic-ui-react'
import {Link} from "react-router-dom";

export default class extends React.Component {
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
}
