import React, { Component } from "react";
import { connect } from "react-redux";
import { Button } from 'antd';
import "antd/dist/antd.css";

class Post extends Component {
  render() {
    return (
      <div>
        <h2 >{this.props.post.name}</h2>
        <p>{this.props.post.description}</p>
        <div>
          <Button type="primary"  onClick={()=> this.props.dispatch({type: 'EDIT_POST', id:this.props.post.id})}>
            Edit
          </Button>
          <Button type="danger" onClick={() => this.props.dispatch({ type: "DELETE_POST", id: this.props.post.id })}>
          Delete
        </Button>
      </div>
    </div>
    );
  }
}

export default connect()(Post);
