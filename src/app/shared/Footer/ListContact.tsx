import "./ListContact.css";

export default function ListContact(props: any) {
  return (
    <div className="footer__contact__container">
      <div className="footer__contact__title">{props.title}</div>
      <ul>
        {props.contacts.forEach((contact: any) => {
          return <li key={contact.id}>{contact.name}</li>;
        })}
      </ul>
    </div>
  );
}
