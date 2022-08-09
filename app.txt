import "./App.css";
import React, { Component } from "react";
import { Todo } from "./component/Todo";
import Additem from "./component/Add";
class App extends Component {
  state = {
    itemall: [],
  };
  removeitem = (id) => {
    // let finditem = this.state.itemall;
    // let find = finditem.findIndex((oneitem) => {
    //   return oneitem.id === id;
    // });
    // finditem.splice(find, 1);
    let item = this.state.itemall.filter((itemone) => {
      return itemone.id !== id;
    });
    this.setState({
      itemall: item,
    });
  };
  additem = (item) => {
    const itemall = this.state.itemall;
    itemall.push(item);

    this.setState({
      itemall,
    });
  };
  render() {
    return (
      <div className="App ">
        <p>TodoList</p>
        <Todo itemall={this.state.itemall} removeitem={this.removeitem} />
        <Additem additem={this.additem} />
      </div>
    );
  }
}
export default App;
