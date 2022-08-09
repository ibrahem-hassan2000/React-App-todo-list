import React from "react";

export const Todo = (props) => {
  const removeitem = props.removeitem;

  const itemall = props.itemall.length ? (
    props.itemall.map((item) => {
      return (
        <div className="ro" key={Math.random()}>
          <span className="name">{item.name}</span>
          <span className="age">{item.age}</span>
          <span className="x icon" onClick={() => removeitem(item.id)}>
            &times;
          </span>
        </div>
      );
    })
  ) : (
    <p>no item here </p>
  );

  return (
    <div className="item">
      <div>
        <span className="name title">Name</span>
        <span className="age title">Age</span>
        <span className="x title">Delet </span>
      </div>

      {itemall}
    </div>
  );
};
