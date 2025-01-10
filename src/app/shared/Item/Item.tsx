import "./Item.css";

export default function Item(props: any) {
  return (
    <>
      <div className="container">
        <img className="image" src={props.img} alt="" />
        <h2 className="item__name">{props.name}</h2>
        <div className="item__time">{props.time}</div>
      </div>
    </>
  );
}
