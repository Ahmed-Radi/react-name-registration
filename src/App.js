import React, { Component} from 'react';
import TodoItems from './components/TodoItems/TodoItems';
import AddItems from './components/AddItem/AddItem';


class App extends Component {
  state ={
    items : [
      {id: 1, name: 'Ahmed', age: 10},
      {id: 2, name: 'Ali', age: 14},
      {id: 3, name: 'Ahmed', age: 12},
    ]
  }

  // deleteItem = (ID) =>{
  //   let items = this.state.items;
  //   let index = items.findIndex(item => item.id === ID);
  //   items.splice(index, 1);
  //   this.setState({items: items});
  // }

  deleteItem = (ID) =>{
    let items = this.state.items.filter(item => {
      return item.id !== ID;
    })
    this.setState({items: items}); /*** this.setState({items}); ***/
  }

  addItem = (item) =>{
    item.id = Math.random();
    let items = this.state.items;
    items.push(item);
    this.setState({items: items}); /*** this.setState({items}); ***/
  }
    render() {
    return (
      <div className="App container">

          <h1 className="text-center">Todo List</h1>
          <TodoItems items={this.state.items} deleteItem={this.deleteItem} />
          <AddItems addItem={this.addItem}/>

      </div>
    );
  }
}

export default App;
