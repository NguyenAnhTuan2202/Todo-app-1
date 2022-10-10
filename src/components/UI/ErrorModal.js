import React from "react";
import Card from "./Card";
import Button from "./Button";
import styled from "./ErrorModal.module.css";

const ErrorModal = (props) => {
  return (
    <div>
      <div className={styled.backdrop} onClick={props.cancelHandler} />
      <Card class={styled.modal}>
        <header className={styled.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={styled.content}>
          <p>{props.message}</p>
        </div>
        <footer className={styled.actions}>
          <Button title="Okay" onClick={props.cancelHandler}></Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;
