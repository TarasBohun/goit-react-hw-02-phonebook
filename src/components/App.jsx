import { Component } from 'react';
import { FormContacts } from './FormContacts';
import { Contacts } from './Contacts/Contacts';
export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  addContact = newContact => {
    // console.log(newContact);
    // console.log(this.state.name);

    this.setState(prevState => {
      return {
        name: [...prevState.name, newContact.name],
      };
    });
  };

  render() {
    return (
      <div>
        <FormContacts onSave={this.addContact} />
        <Contacts title="Contacts" contacts={this.state.name} />
      </div>
    );
  }
}
