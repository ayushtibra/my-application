import React, { Component } from "react";
import { Layout, Menu, Drawer, Button, Badge, Icon, List } from "antd";
import { FixedSizeList as VList } from "react-window";
import Notification from "./Components/Notification";
import Bar from "./Components/bar";
import BarChange from "./Components/barchange";
import RoundBarChange from "./Components/roundbarchange";
import axios from "axios";
import "antd/dist/antd.css";
import "./App.css";

const { Header, Content, Footer } = Layout;
// const ButtonGroup = Button.Group;
// const content = (
//   <div>
//     <p>Content</p>
//     <p>Content</p>
//   </div>
// );

class App extends Component {
  state = {
    notifications: [],
    visible: false,
    percent: 60,
    percent1: 80
  };

  componentDidMount() {
    // http://localhost:3000/db.json
    // https://notification-infinite.firebaseapp.com/db.json
    // https://notification-infinite.herokuapp.com/db.json
    axios
      .get("https://notification-infinite.herokuapp.com/db.json")
      .then(res => {
        this.setState({
          notifications: res.data.notification
        });
      });
  }

  showDrawer = () => {
    this.setState({
      visible: true
    });
  };

  onClose = () => {
    this.setState({
      visible: false
    });
  };

  increase = () => {
    let percent = this.state.percent + 10;

    if (percent > 100) {
      percent = 100;
    }
    this.setState({ percent });
  };

  increase1 = () => {
    let percent1 = this.state.percent1 + 10;
    if (percent1 > 100) {
      percent1 = 100;
    }
    this.setState({ percent1 });
  };

  decline = () => {
    let percent = this.state.percent - 10;
    if (percent < 0) {
      percent = 0;
    }
    this.setState({ percent });
  };

  decline1 = () => {
    let percent1 = this.state.percent1 - 10;
    if (percent1 < 0) {
      percent1 = 0;
    }
    this.setState({ percent1 });
  };

  render() {
    const Row = ({ index, style }) => (
      <div style={style}>
        <Notification {...this.state.notifications[index]} />
      </div>
    );

    return (
      <Layout className="layout">
        <Header style={{ height: "56px" }}>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            // defaultSelectedKeys={["1"]}
            style={{ lineHeight: "56px" }}
          >
            <Menu.Item key="1">Home</Menu.Item>
            <Menu.Item key="2">About</Menu.Item>
            <Menu.Item key="3">Contact Us</Menu.Item>
          </Menu>
        </Header>

        <Content>
          <div className="main">
            <div style={{ textAlign: "center", marginTop: "20px" }}>
              <Badge dot>
                <Button
                  type="primary"
                  onClick={this.showDrawer}
                  className="btn"
                >
                  <Icon type="notification" />
                  See Notification
                </Button>
              </Badge>
            </div>

            <Bar />

            <RoundBarChange
              percent={this.state.percent}
              decline={this.decline}
              increase={this.increase}
            />

            <BarChange
              percent1={this.state.percent1}
              decline1={this.decline1}
              increase1={this.increase1}
            />

            <Drawer
              className="drawer"
              title="All Notifications"
              placement="right"
              closable
              onClose={this.onClose}
              visible={this.state.visible}
              getContainer={false}
              destroyOnClose={true}
            >
              <List>
                <VList
                  className="list"
                  height={window.innerHeight}
                  itemCount={this.state.notifications.length}
                  itemSize={95}
                  width={200}
                >
                  {Row}
                  {/* {this.renderRow} */}
                </VList>
              </List>
            </Drawer>
          </div>
        </Content>

        <Footer
          style={{
            textAlign: "center",
            backgroundColor: "black",
            color: "white"
          }}
        >
          Notification Wrapper - ©2019 - Created by Ayush
        </Footer>
      </Layout>
    );
  }
}

export default App;

// renderRow = ({ index, key, style }) => {
//   const notification = this.state.notifications[index];
//   // const props = {
//   //   Title: notification.Title,
//   //   Description: notification.Description,
//   //   timestamp: notification.timestamp,
//   //   Owner: notification.Owner
//   // };
//   return (
//     <List.Item key={key} style={style}>
//       <List.Item.Meta
//         avatar={<Avatar src="https://source.unsplash.com/random/300x300" />}
//         title={notification.Title}
//         description={
//           notification.Description +
//           " " +
//           notification.Owner +
//           " " +
//           notification.timestamp
//         }
//       />
//       <Popover content={content} trigger="click">
//         <Icon type="more" />
//       </Popover>
//       {/* <Notification {...props} />; */}
//     </List.Item>
//   );
// };
