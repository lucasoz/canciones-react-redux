import React from 'react'
import { Table } from 'semantic-ui-react'
import SongItem from './SongItem'
import SongDelete from './SongDelete'
import { connect } from 'react-redux'

class SongsList extends React.Component {
    render(){
        return(
          <div>
            <Table striped>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Name</Table.HeaderCell>
                        <Table.HeaderCell>Artist</Table.HeaderCell>
                        <Table.HeaderCell>Year</Table.HeaderCell>
                        <Table.HeaderCell>Options</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {this.props.songs.map((song, index)=>{
                        return (
                            <SongItem key={song.id} song={song} />
                        )
                    })}
                </Table.Body>
            </Table>
            <SongDelete/>
        </div>

        )
    }
}

// <SongDelete />

const mapStateToProps = (state, ownProps) => {
  //pass the songs in the state of redux to the App's props
  return {
    songs: state.songs.toJS()
  }
}

// connect is like a subscript a Component to the changes in redux state
export default connect(mapStateToProps)(SongsList);
