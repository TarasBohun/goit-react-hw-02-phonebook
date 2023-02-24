export const Contacts = ({ contacts = [], title }) => {
  return (
    <ul>
      {title}
      {contacts &&
        contacts.map(contact => {
          return <li key={contact}>{contact}</li>;
        })}
    </ul>
  );
};
