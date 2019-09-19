import React, { Component } from "react";
// import List from "./list";
import classes from "./App.module.css";
import { Drawer, Button } from "antd";
import "antd/dist/antd.css";
import { FixedSizeList as VList } from "react-window";
import Notification from "./Notification";
import axios from "axios";

class App extends Component {
  state = {
    notifications: [],
    visible: false
  };

  componentDidMount() {
    axios.get("http://localhost:3001/db.json").then(res => {
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

  // Row = ({ index, style }) => {
  //   return <Notification {...this.state.notifications[index]} />;
  // };

  render() {
    const Row = ({ index, style }) => (
      <div style={style}>
        <Notification {...this.state.notifications[index]} />
      </div>
    );

    return (
      <div
        style={{
          height: 600,
          overflow: "hidden",
          position: "relative",
          border: "1px solid #ebedf0",
          borderRadius: 2,
          // padding: 48,
          // //textAlign: "center",
          background: "#fafafa"
        }}
      >
        Render in this
        <div style={{ marginTop: 16 }}>
          <Button type="primary" onClick={this.showDrawer}>
            Open
          </Button>
        </div>
        <Drawer
          title="Notifications"
          placement="right"
          closable
          onClose={this.onClose}
          visible={this.state.visible}
          getContainer={false}
          destroyOnClose={true}
          style={{
            position: "absolute"
          }}
        >
          <VList
            className="List"
            height={500}
            itemCount={this.state.notifications.length}
            itemSize={95}
            width={200}
          >
            {Row}
          </VList>
        </Drawer>
      </div>

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
