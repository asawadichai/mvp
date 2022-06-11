import React from 'react';

var Item = (props) => {
  return (
    <div key={props.key}>
      <li>{props.manufacturer} {props.name}</li>
      <img src={props.image} width={250} height={300}></img>
    </div>
  );
}

export default Item;