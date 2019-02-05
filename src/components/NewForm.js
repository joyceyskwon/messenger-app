import React from 'react'

export default class NewForm extends React.Component {
  state = {
    newName: '',
    newMessage: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    this.props.handleSubmit(e)
    this.setState(prevState => {
      return {
        newName: "",
        newMessage: ""
      }
    })
  }

  render() {
    return(
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <input
            value={this.state.newName} onChange={(e) => this.handleChange(e)} id="newName"
            placeholder="name" />
          <input
            value={this.state.newMessage} onChange={(e) => this.handleChange(e)} id="newMessage"
            placeholder="message" />
          <input type="submit" />
        </form>
    )
  }
}
