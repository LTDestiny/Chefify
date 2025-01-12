import "./ListContact.css";

export default function ListContact(props: any) {
  return (
    <div
      className="footer__contact__container"
      style={{
        left: `${props.left}px`,
        top: `${props.top}px`,
      }}
    >
      <div className="footer__contact__title">{props.title}</div>
      <ul>
        {props.contacts.map((contact: any) => {
          return <li key={contact}>{contact}</li>;
        })}
      </ul>
    </div>
  );
}
