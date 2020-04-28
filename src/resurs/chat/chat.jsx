import React from "react";
import s from "./chat.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = props => {
  let path = "/chat/" + props.id;
  return (
    <div>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

const Message = props => {
  return <div>{props.mess}</div>;
};

const Chat = () => {
  return (
    <div>
      чат
      <div className={s.dialogs}>
        <div className={s.dialogItem}>
          <DialogItem name="test" id="1" />
          <DialogItem name="Maxim" id="2" />
          <DialogItem name="Alex" id="3" />
        </div>
        <div className={s.messages}>
          <Message mess="Сообщенька1" />
          <Message mess="Сообщенька2" />
          <Message mess="Сообщенька3" />
          <Message mess="Сообщенька4" />
        </div>
      </div>
    </div>
  );
};

export default Chat;
