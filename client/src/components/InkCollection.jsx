import React from 'react';
import Item from './Item.jsx';

var InkCollection = (props) => (
  <div>
    <h2>Inks</h2>
    {/* You have {props.pens.length} bottles. */}
    {props.inks.map((item) => (
      <Item key={item._id} manufacturer={item.manufacturer} name={item.name}/>
    ))}
  </div>
)

export default InkCollection;