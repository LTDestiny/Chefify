import "./BigItem.css";

export default function BigItem(props: any) {
  return (
    <div className="bigItem__container">
      <img src={props.img} alt="" />
      <div className="bigItem__title">{props.title}</div>
      <div className="bigItem__time">{props.time}</div>
      <div className="bigItem__avatar">{props.avatar}</div>
      <div className="bigItem__content">{props.name}</div>
    </div>
  );
}
