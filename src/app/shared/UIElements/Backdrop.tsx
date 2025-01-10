import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import "./Backdrop.css";

export default function Backdrop(props: any) {
  const [backdrop, setBackdrop] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setBackdrop(document.getElementById("backdrop-hook"));
  }, []);

  if (!backdrop) {
    return null;
  }

  return ReactDOM.createPortal(
    <div className="backdrop" onClick={props.onClick}></div>,
    backdrop
  );
}
