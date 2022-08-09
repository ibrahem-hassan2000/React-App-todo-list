import React, { Component } from "react";

class Additem extends Component {
  state = {
    name: "",
    age: "",
    id: "",
  };
  addname = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  handel = (e) => {
    e.preventDefault();
    if (this.state.name !== "" && this.state.age !== "") {
      this.setState({
        id: Math.random(),
      });

      console.log(this.state);
      this.props.additem(this.state);
      this.setState({
        name: "",
        age: "",
      });
    }
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handel}>
          <input
            type="text"
            onChange={this.addname}
            id="name"
            placeholder="Enter Name.."
            value={this.state.name}
          />
          <input
            type="number"
            onChange={this.addname}
            id="age"
            placeholder="Enter Age.."
            value={this.state.age}
          />
          <input type="submit" value="Add" />
        </form>
      </div>
    );
  }
}

export default Additem;
