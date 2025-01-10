import React from "react";

import "./MainHeader.css";

export default function MainHeader(props: any) {
  return <header className="main-header">{props.children}</header>;
}
