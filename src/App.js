import React, { Component } from 'react'
import ListContacts from './ListContacts'
import Proptypes from 'prop-types' 


class App extends Component { 

  state = {
     contacts: [
      {
        "id": "ryan",
        "name": "Ryan Florence",
        "email": "ryan@reacttraining.com",
        "avatarURL": "http://localhost:5001/ryan.jpg"
      },
      {
        "id": "michael",
        "name": "Michael Jackson",
        "email": "michael@reacttraining.com",
        "avatarURL": "http://localhost:5001/michael.jpg"
      },
      {
        "id": "tyler",
        "name": "Tyler McGinnis",
        "email": "tyler@reacttraining.com",
        "avatarURL": "http://localhost:5001/tyler.jpg"
      }
    ]
  }

  removeContact = (contact) => {
    this.setState((state) => ({
      contacts: state.contacts.filter((c) => c.id !== contact.id)
    }))
  }

  render() {
    return (
      <div>
        <ListContacts contacts={this.state.contacts} onDeleteContact={this.removeContact} />
      </div>
    )
  }
}

ListContacts.propTypes = {
  contacts: Proptypes.array.isRequired,
  onDeleteContact: Proptypes.func.isRequired
} 

export default App;