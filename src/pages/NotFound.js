import React from 'react'
import { Message } from 'semantic-ui-react'

export default class  extends React.Component {
    render(){
        return(
          <Message negative>
            <Message.Header>We're sorry we can't display this route</Message.Header>
            <p>Verify, Is URL correct?</p>
          </Message>
        )
    }
}
