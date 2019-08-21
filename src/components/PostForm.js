import React, { Component } from "react";
import {connect} from 'react-redux';

class PostForm extends Component {
  handleSubmit = e => {
    e.preventDefault();
    const name = this.getName.value;
    const description = this.getDescription.value;
    const data = {
      id: new Date(),
      name,
      description,
      editing: false
    };
    // console.log(data)
    this.props.dispatch({
        type:'ADD_POST',
        data
    })
    this.getName.value= '';
    this.getDescription.value = '';
  };
  render() {
   
    return (
      <div >
        <h1 >You are adding a new element</h1>
        <form  onSubmit={this.handleSubmit}>
          Name:
         <br /><input
            required
            type="text"
            ref={input => (this.getName = input)}
            placeholder="Enter Name"
          />{" "}
          <br />
          <br />
          Description:
         <br />
          <textarea
            required
            cols="28"
            rows="5"
            ref={input => (this.getDescription = input)}
            placeholder="Enter a description"
          />{" "}
          <br />
          <button>Create</button>
        </form>
      </div>
    );
  }
}

export default connect()(PostForm);
