import React, { Component } from "react";
import {
  Layout,
  Menu,
  Breadcrumb,
  Drawer,
  Button,
  Progress,
  Badge,
  Icon
} from "antd";
import { FixedSizeList as VList } from "react-window";
import Notification from "./Notification";
import axios from "axios";
import "antd/dist/antd.css";
import "./App.css";

const { Header, Content, Footer } = Layout;
const ButtonGroup = Button.Group;
class App extends Component {
  state = {
    notifications: [],
    visible: false,
    percent: 60,
    percent1: 80
  };

  componentDidMount() {
    axios.get("https://notification-infinite.herokuapp.com/db.json").then(res => {
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

            <div className="bar">
              <Progress percent={30} size="small" />
              <Progress percent={50} size="small" status="active" />
              <Progress percent={70} size="small" status="exception" />
              <Progress percent={100} size="small" />
              <Progress percent={50} size="small" showInfo={false} />
            </div>

            <div className="barChange">
              <Progress type="circle" percent={this.state.percent} />
              <ButtonGroup>
                <Button onClick={this.decline} icon="minus" />
                <Button onClick={this.increase} icon="plus" />
              </ButtonGroup>
            </div>

            <div className="barChange1">
              <Progress percent={this.state.percent1} />
              <ButtonGroup className="btnGrp">
                <Button onClick={this.decline1} icon="minus" />
                <Button onClick={this.increase1} icon="plus" />
              </ButtonGroup>
            </div>

            <Drawer
              className="drawer"
              title="Notifications"
              placement="right"
              closable
              onClose={this.onClose}
              visible={this.state.visible}
              getContainer={false}
              destroyOnClose={true}
            >
              <VList
                className="list"
                height={window.innerHeight}
                itemCount={this.state.notifications.length}
                itemSize={95}
                width={200}
              >
                {Row}
              </VList>
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

      // <div className="main">
      //   <p>Click Me</p>
      //   <div style={{ marginTop: 16 }}>
      //     <Button type="primary" onClick={this.showDrawer} className="btn">
      //       Open
      //     </Button>
      //   </div>
      //   <Drawer
      //     className="draw"
      //     title="Notifications"
      //     placement="right"
      //     closable
      //     onClose={this.onClose}
      //     visible={this.state.visible}
      //     getContainer={false}
      //     destroyOnClose={true}
      //   >
      //     <VList
      //       className="list"
      //       height={window.innerHeight}
      //       itemCount={this.state.notifications.length}
      //       itemSize={95}
      //       width={200}
      //     >
      //       {Row}
      //     </VList>
      //   </Drawer>
      // </div>

      // <List
      //   className="List"
      //   height={window.innerHeight}
      //   itemCount={this.state.notifications.length}
      //   itemSize={95}
      //   width={window.innerWidth}
      // >
      //   {Row}
      // </List>
    );
  }
}

export default App;

// import React, { Component } from "react";
// import NavBar from "./notification";
// import axios from "axios";
// import List from "./list";
// import classes from "./App.module.css";

// const App = () => {
//   return (
//     <div className={classes.App}>
//       <List numItems={1000} />
//     </div>
//   );
// };

// export default App;
