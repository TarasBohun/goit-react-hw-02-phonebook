import { Component } from 'react';
import { FormContacts } from './FormContacts';
import { Contacts } from './Contacts/Contacts';
export class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  addContact = newContact => {
    // console.log(newContact);
    // console.log(this.state.name);
    const contact = {
      id: newContact.id,
      name: newContact.name,
      number: newContact.number,
    };
    // console.log(contact);

    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, contact],
      };
    });
  };

  render() {
    return (
      <div>
        <FormContacts onSave={this.addContact} />
        <Contacts
          title="Contacts"
          // contacts={this.state.name}
          // numbers={this.state}
          contacts={this.state.contacts}
        />
      </div>
    );
  }
}
