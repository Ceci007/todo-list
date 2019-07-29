import React, { Component } from 'react';

class ThingsTodo extends Component {
    myStyle = () => {
        return this.props.list.finished ? "todos finished" : "todos";
    }

    render() { 
        return ( 
        <div className={this.myStyle()}>
            <label className="container">
                <input type="checkbox" 
                onChange={this.props.onComplete.bind(this, this.props.list.id)}/>
                <span className="checkmark"></span>
            </label>
            <h2>{ this.props.list.title }</h2>
            <button className="btn-danger"
            onClick={this.props.deleteTodo.bind(this, this.props.list.id)}>
                X
            </button>
        </div> );
    }
}
 
export default ThingsTodo;