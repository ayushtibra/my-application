import React, { Component } from "react";
import randomQuotes from "random-quotes";
import VirtualList from "./VirtualList";
import axios from "axios";

class List extends Component {
  state = {
    notifications: []
  };

  componentDidMount() {
    axios.get("http://localhost:3001/db.json").then(res => {
      this.setState({
        notifications: res.data.notification
      });
    });
  }

  render() {
    return <VirtualList notifications={this.state.notifications} />;
  }
}

export default List;

//   state = {
//     quotes: []
//   };

//   componentDidMount() {
//     this.setState({
//       quotes: randomQuotes(this.props.numItems)
//     });
//   }

//   render() {
//     return <VirtualList quotes={this.state.quotes} />;
//   }
