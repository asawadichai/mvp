import React from 'react';
import ReactDOM from 'react-dom';
import AddItem from './components/AddItem.jsx'
import PenCollection from './components/PenCollection.jsx'
import $ from 'jquery';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pens: [],
      inks: [],
      notebooks: []
    }
  }

  componentDidMount () {
    console.log('loading collection');
    $.get('/collection', (data) => {
      this.setState({pens: data})
      console.log(this.state)
    })
  }

  submit(item) {
    console.log(`${item.item} is being added`);
    $.ajax({
      url: '/addItem',
      type: 'POST',
      data: item,
      dataType: 'json'
    })
  }

  render () {
    return (
      <div>
        <h1>The Pen Book</h1>
        <AddItem submitItem={this.submit.bind(this)}/>
        <PenCollection pens={this.state.pens}/>
        {/* <PenCollection pens={this.state.pens}/>
        <InkCollection inks={this.state.inks}/>
        <NotebookCollection notebooks={this.state.notebooks}/> */}
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));