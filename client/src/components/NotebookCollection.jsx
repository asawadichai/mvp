import React from 'react';
import Item from './Item.jsx';

var NotebookCollection = (props) => (
  <div>
    <h2>Notebooks</h2>
    {/* You have {props.pens.length} notebooks. */}
    {props.notebooks.map((item) => (
      <Item key={item._id} manufacturer={item.manufacturer} name={item.name}/>
    ))}
  </div>
)

export default NotebookCollection;