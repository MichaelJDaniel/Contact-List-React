import React, { Component } from 'react';
import Contacts from "./Contacts"
import ContactForm from "./ContactForm"
import { Container, Header, Button, Icon, Segment, } from 'semantic-ui-react'

class App extends Component {
  state = {
    contacts: [
      { id: 1, name: "Jerry", phone: "801-121-5656", },
      { id: 2, name: "George", phone: "626-567-1872", },
      { id: 3, name: "Cosmo", phone: "802-134-9876", },
    ], showForm: true,
  }



  getId = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1)
  }

  addContact = (contactData) => {
    let contact = { id: this.getId(), ...contactData, }
    this.setState({ contacts: [contact, ...this.state.contacts, contact] })
  }

  removeContact = (id) => {
    const contacts = this.state.contacts.filter(contact => {
      if (contact.id != id)
        return contact
    })
    this.setState({ contacts: [...contacts], })

    

  }
  toggleForm = () => this.setState({ showForm: !this.state.showForm, });


  render() {
    const {showForm,} =this.state
    return (
      <Container style={{ paddingTop: "25px", }}>
        <Header as="h1">React Contact List</Header>
        <br />
        <Segment basic>
          <Button icon color="blue" onClick={this.toggleForm}>
            <Icon name={this.state.showForm ? 'angle double up' : 'angle double down'} />
          </Button>
          {this.state.showForm ? <ContactForm add={this.addContact} /> : null}
        </Segment>
        <br />
        <Contacts unicorn={this.state.contacts} remove={this.removeContact} />
      </Container>
    )
  }
}

export default App;
