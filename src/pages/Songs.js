import React from 'react'
import SongsList from '../components/SongsList'
import { connect } from "react-redux";
import { Progress } from 'semantic-ui-react'

class Songs extends React.Component {
    render(){
        return(
            <div>
              {this.props.show ? <Progress percent={100} active color="blue" size="medium" />:
            <SongsList /> }

          </div>

        )
    }
}

const mapStateToProps = (state, ownProps) => {
  return {
    show: state.fetch.toJS().show,
  }
}

export default connect(mapStateToProps)(Songs);

// could be used while data is fetch
