"use client";

import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";

import "./SideDrawer.css";

export default function SideDrawer(props: any) {
  const [drawerHook, setDrawerHook] = useState<HTMLElement | null>(null);

  useEffect(() => {
    // Chỉ gắn hook vào DOM khi đã được mount
    setDrawerHook(document.getElementById("drawer-hook"));
  }, []);

  if (!drawerHook) {
    return null; // Chưa có hook trong DOM, không render gì cả
  }

  return ReactDOM.createPortal(
    <CSSTransition
      in={props.show}
      timeout={200}
      classNames="slide-in-left"
      mountOnEnter
      unmountOnExit
    >
      <aside className="side-drawer" onClick={props.onClick}>
        {props.children}
      </aside>
    </CSSTransition>,
    drawerHook
  );
}
