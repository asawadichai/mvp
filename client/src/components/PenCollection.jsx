import React from 'react';
import Item from './Item.jsx';

var PenCollection = (props) => (
  <div>
    <h2>Pens</h2>
    {/* You have {props.pens.length} pens. */}
    {props.pens.map((item) => (
      <Item key={item._id} manufacturer={item.manufacturer} name={item.name} image={item.image}/>
    ))}
  </div>
)

export default PenCollection;