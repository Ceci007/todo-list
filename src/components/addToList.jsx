import React, { Component } from 'react';

class AddToList extends Component {
    state = {  
        title: ""
    }

    onAdd = event => {
        this.setState({ title: event.target.value });
    }

    onSubmit = event => {
        event.preventDefault();

        this.props.addToList(this.state.title);
        this.setState({ title: "" });
    }

    render() { 
        return ( 
        <form onSubmit={this.onSubmit}>
            <input type="text" name="title" placeholder="Add to list..." 
            value={this.state.title}
            onChange={this.onAdd} />
            <button type="submit" value="submit" className="btn-add">ADD</button>
        </form> );
    }
}
 
export default AddToList;