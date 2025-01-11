import "./BigItem.css";

export default function BigItem(props: any) {
  return (
    <div className="bigItem__container">
      <img className="bigItem__image" src={props.img} alt="" />
      <div className="bigItem__title">{props.title}</div>
      <div className="bigItem__time">{props.time}</div>
      {/* <img src={props.avatar} className="bigItem__avatar"></img> */}
      <div className="bigItem__name">{props.name}</div>
      <div className="bigItem__content">{props.content}</div>
    </div>
  );
}
