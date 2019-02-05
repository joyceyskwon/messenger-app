import React, { Component } from 'react';
import './App.css';
import MessageContainer from './components/MessageContainer'
import NewForm from './components/NewForm'

class App extends Component {

  state = {
    messages: [],
    newName: '',
    newMessage: '',
  }

  componentDidMount = () => {
    this.fetchMessages()
  }

  fetchMessages = () => {
    fetch("http://fetch-message-in-the-bottle.herokuapp.com/api/v2/messages")
    .then( r => r.json())
    .then( messageData => {
      this.setState({
        messages: messageData
      })
    })
  }

  handleDelete = (messageId) => {
    const foundMessage = this.state.messages.find( message => message.id === messageId)
    fetch(`http://fetch-message-in-the-bottle.herokuapp.com/api/v2/messages/${foundMessage.id}`, {method: 'DELETE'})
    .then(this.fetchMessages)
  }

  handleSubmit = e => {
    e.preventDefault()
    const newName = e.target.newName.value
    const newMessage = e.target.newMessage.value
    fetch("http://fetch-message-in-the-bottle.herokuapp.com/api/v2/messages", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(
        {"message":
          {"message": newMessage, "real_name": newName}
        }
      )
    })
    .then(this.fetchMessages)
  }

  handleEditSubmit = (e,id) => {
    e.preventDefault()
    const editName = e.target.editName.value
    const editMessage = e.target.editMessage.value
    fetch(`http://fetch-message-in-the-bottle.herokuapp.com/api/v2/messages/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(
        {"message":
          {"message": editMessage, "real_name": editName}
        }
      )
    })
    .then(this.fetchMessages)

  }

  render() {
    return (
      <div className="App">
          <h1>Message App</h1>
            <NewForm
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              newName={this.state.newNameInput}
              newMessage={this.state.newMessageInput}
             />
          <MessageContainer
            handleEditToggle={this.handleEditToggle}
            messages={this.state.messages}
            handleEdit={this.handleEdit}
            handleDelete={this.handleDelete}
            handleEditSubmit={this.handleEditSubmit}
          />
      </div>
    );
  }
}

export default App;
