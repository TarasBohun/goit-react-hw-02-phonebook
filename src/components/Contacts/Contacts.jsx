export const Contacts = ({ contacts, title }) => {
  //   const { id, name, number } = contacts;

  return (
    <ul>
      {title}
      {contacts.map(({ id, name, number }) => {
        return (
          <li key={id}>
            {name}: {number}
          </li>
        );
      })}
    </ul>
  );
};
