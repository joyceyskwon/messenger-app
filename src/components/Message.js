import React from 'react'
import EditForm from '../components/EditForm'

class Message extends React.Component {

  state = {
    editClicked: false
  }

  handleEditToggle = () => {
    this.setState({
      editClicked: !this.state.editClicked
    })
  }

  render() {
    return (
      <div>
        <h3>{this.props.message.real_name}  - {this.props.message.message}</h3>
        <button
          onClick={this.handleEditToggle}
          id="edit">Edit
        </button>
        <button
          onClick={()=>this.props.handleDelete(this.props.message.id)}
          id="delete">Delete
        </button>
        {this.state.editClicked ?
          <EditForm
            handleEditSubmit={this.props.handleEditSubmit}
            message={this.props.message}
            handleEditToggle={this.handleEditToggle}
          />
        :
        null
        }
      </div>
    )
  }
}

export default Message
