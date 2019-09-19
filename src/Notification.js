import React from "react";

const Notification = props => {
  return (
    <ul>
      <li>{props.Title}</li>
      <li>{props.Description}</li>
      <li>{props.timestamp}</li>
      <li>{props.Owner}</li>
    </ul>
  );
};

export default Notification;
