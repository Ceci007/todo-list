import React, { Component } from 'react';
import Todos from './components/todos';
import Header from './components/header';
import AddToList from './components/addToList';
import './App.css';

class App extends Component {
  state = {
    todos: [
      { id: 1, title: "Walk the dog", finished: false },
      { id: 2, title: "Vacuum the carpet", finished: false },
      { id: 3, title: "Take out the trash", finished: false }
    ]
  }

  onComplete = id => {
    this.setState({ todos: this.state.todos.map(
      list => {if(list.id === id) {
        list.finished = !list.finished;
      }
      return list;
    }
    )});
  }

  deleteTodo = id => {
    this.setState({ todos: [...this.state.todos.filter(list => list.id !== id)] });
  }

  addToList = title => {
    const newTodo = {
      id: this.state.todos.length + 1,
      title,
      finished: false
    }

    this.setState({ todos: [...this.state.todos, newTodo] });
  }

  render() {
    const { todos } = this.state;

    return (
      <div className="App">
        <Header />
        <AddToList addToList={this.addToList} />
        <Todos todos={todos} 
        onComplete={this.onComplete}
        deleteTodo={this.deleteTodo} />
      </div>
    );
 }
}

export default App;
