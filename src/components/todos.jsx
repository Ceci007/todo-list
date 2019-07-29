import React, { Component } from 'react';
import ThingsTodo from './thingsTodo';

class Todos extends Component {
    render() { 
        return this.props.todos.map(list => 
        <ThingsTodo key={list.id} 
        list={list} 
        onComplete={this.props.onComplete} 
        deleteTodo={this.props.deleteTodo} />);
    }
}
 
export default Todos;