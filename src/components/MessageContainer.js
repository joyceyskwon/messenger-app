import React from 'react'
import Message from '../components/Message'

export default class MessageContainer extends React.Component {

  renderMessages = () => {
    return this.props.messages.map( message => {
      return <Message
        key={message.id}
        message={message}
        handleEditToggle={this.props.handleEditToggle}
        handleEdit={this.props.handleEdit}
        handleDelete={this.props.handleDelete}
        handleEditSubmit={this.props.handleEditSubmit}
      />
    })
  }

  render() {
    return(
      <div>
        {this.renderMessages()}
      </div>
    )
  }

}
