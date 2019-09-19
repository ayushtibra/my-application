import React, { Component } from "react";
import { List, Avatar } from "antd";
import "antd/dist/antd.css";
import { FixedSizeList as VList } from "react-window";
import Notification from "./Notification";

class VirtualList extends Component {
  renderRow = ({ index, key, style }) => {
    // console.log(index);
    const notification = this.props.notifications[index];
    const props = {
      Title: notification.Title,
      Description: notification.Description,
      timestamp: notification.timestamp,
      Owner: notification.Owner
    };
    return (
      <List.Item key={key} style={style}>
        <List.Item.Meta
          avatar={<Avatar src="https://source.unsplash.com/random/300x300" />}
          title={notification.Title}
          description={notification.Description}
        />
        {/* <Notification {...props} />; */}
      </List.Item>
    );
  };

  render() {
    return (
      <List dataSource={this.notifications}>
        <VList
          height={window.innerHeight}
          width={window.innerWidth}
          itemCount={this.props.notifications.length}
          itemSize={75}
          overscanCount={3}
        >
          {this.renderRow}
        </VList>
      </List>
    );
  }
}

export default VirtualList;

//   renderRow = ({ index, key, style }) => {
//     const quote = this.props.quotes[index];
//     return (
//       <List.Item key={key} style={style}>
//         <List.Item.Meta
//           avatar={<Avatar src="https://source.unsplash.com/random/300x300" />}
//           title={quote.body}
//           description={quote.author}
//         />
//       </List.Item>
//     );
//   };
//   render() {
//     return (
//       <List dataSource={this.quotes}>
//         <VList
//           height={window.innerHeight}
//           width={window.innerWidth}
//           itemCount={this.props.quotes.length}
//           itemSize={75}
//           overscanCount={3}
//         >
//           {this.renderRow}
//         </VList>
//       </List>
//     );
//   }
