import React from "react";

import "./Card.css";

export default function Card(props: any) {
  return <div className={`card ${props.className}`}>{props.children}</div>;
}
