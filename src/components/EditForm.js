import React from 'react'

export default class EditForm extends React.Component {

  state = {
    editName: this.props.message.real_name,
    editMessage: this.props.message.message
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    this.props.handleEditSubmit(e,this.props.message.id)
    this.props.handleEditToggle()
  }

  render() {
    return(
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <input
          value={this.state.editName}
          onChange={this.handleChange}
          id="editName"
          placeholder="name"
        />
        <input
          value={this.state.editMessage} onChange={this.handleChange} id="editMessage"
          placeholder="message" />
        <input
          type="submit"
        />
      </form>
    )
  }
}
