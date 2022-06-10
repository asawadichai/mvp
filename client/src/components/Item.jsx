import React from 'react';

var Item = (props) => {
  return (
    <div key={props.key}>
      <li>{props.manufacturer} {props.name}</li>
    </div>
  );
}

export default Item;