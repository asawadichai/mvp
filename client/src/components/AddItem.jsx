import React from 'react'
import { Multiselect } from 'multiselect-react-dropdown'

class AddItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      item: '',
      manufacturer: '',
      name: '',
      image: ''
    }
    this.onItemChange = this.onItemChange.bind(this);
    this.onManufacturerChange = this.onManufacturerChange.bind(this);
    this.onNameChange = this.onNameChange.bind(this);
    this.onImageChange = this.onImageChange.bind(this);

    this.submit = this.submit.bind(this);
  }

  onItemChange (e) {
    this.setState({item: e.target.value})
  }
  onManufacturerChange (e) {
    this.setState({manufacturer: e.target.value})
  }
  onNameChange (e) {
    this.setState({name: e.target.value})
  }
  onImageChange (e) {
    this.setState({image: e.target.value})
  }
  submit() {
    this.props.submitItem(this.state)
    console.log(this.state)
  }

  render() {
    return (
      <div>
        <h3>Add to the collection</h3>
        <p>Item: <input type="text" value={this.state.item} onChange={this.onItemChange.bind(this)}/></p>
        <p>Manufacturer: <input type="text" value={this.state.manufacturer} onChange={this.onManufacturerChange.bind(this)}/></p>
        <p>Name: <input type="text" value={this.state.name} onChange={this.onNameChange.bind(this)}/></p>
        <p>Image link: <input type="text" value={this.state.image} onChange={this.onImageChange.bind(this)}/></p>
        <button onClick={this.submit}>Add Item</button>
      </div>
    )
  }
}

export default AddItem;