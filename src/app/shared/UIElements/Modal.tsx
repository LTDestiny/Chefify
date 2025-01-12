"use client";

import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";

import Backdrop from "./Backdrop";
import "./Modal.css";

const ModalOverlay = (props: any) => {
  const [modalHook, setModalHook] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setModalHook(document.getElementById("modal-hook"));
  }, []);

  if (!modalHook) {
    return null;
  }

  const content = (
    <div className={`modal ${props.className}`} style={props.style}>
      {props.header && (
        <header className={`modal__header ${props.headerClass}`}>
          <h2>{props.header}</h2>
        </header>
      )}
      <form
        onSubmit={
          props.onSubmit ? props.onSubmit : (event) => event.preventDefault()
        }
      >
        {props.contentClass && (
          <div className={`modal__content ${props.contentClass}`}>
            {props.children}
          </div>
        )}
        {!props.contentClass && (
          <div className="modal__content__empty">{props.children}</div>
        )}
        {props.footer && (
          <footer className={`modal__footer ${props.footerClass}`}>
            {props.footer}
          </footer>
        )}
      </form>
    </div>
  );
  return ReactDOM.createPortal(content, modalHook);
};

export default function Modal(props: any) {
  const nodeRef = useRef<HTMLDivElement>(null); // Tạo nodeRef
  return (
    <>
      {props.show && <Backdrop onClick={props.onCancel} />}
      <CSSTransition
        in={props.show}
        mountOnEnter
        unmountOnExit
        timeout={200}
        classNames="modal"
        nodeRef={nodeRef}
      >
        <ModalOverlay {...props} />
      </CSSTransition>
    </>
  );
}
