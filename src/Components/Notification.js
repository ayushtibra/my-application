import React from "react";
import { List, Avatar, Icon, Popover } from "antd";

const Notification = props => {
  const str = "Content ";
  const content = <div>{str.repeat(props.Actions)}</div>;

  return (
    <List.Item>
      <List.Item.Meta
        avatar={<Avatar src="https://source.unsplash.com/random/300x300" />}
        title={props.Title}
        description={
          props.Description + " " + props.Owner + " " + props.timestamp
        }
      />
      <Popover content={content} trigger="click">
        <Icon type="more" />
      </Popover>
    </List.Item>
  );
};

// const Notification = props => {
//   return (
//     <ul>
//       <li>{props.Title}</li>
//       <li>{props.Description}</li>
//       <li>{props.timestamp}</li>
//       <li>{props.Owner}</li>
//     </ul>
//   );
// };

export default Notification;
