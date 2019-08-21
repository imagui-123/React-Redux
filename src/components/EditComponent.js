import React, { Component } from 'react';
import {connect} from 'react-redux';

class EditComponent extends Component {
    handleEdit = (e) => {
        e.preventDefault();
        const newName = this.getName.value;
        const newDescription = this.getDescription.value;
        const data = {
            newName,
            newDescription
        }
        this.props.dispatch({type: 'UPDATE', id:this.props.post.id, data:data})
    }

 
    render() {
        return (
            <div>
                <form onSubmit={this.handleEdit}>
                    <h1>You are editing</h1><br/>
                    <input required type="text" ref={(input)=> this.getName=input} defaultValue={this.props.post.name} placeholder="Enter Name"/> <br/>
                    <textarea required cols="28" rows="5" ref={(input) => this.getDescription = input} defaultValue={this.props.post.description} placeholder="Enter Description" ></textarea> <br/>
                    <button>Update</button>
                </form>
            </div>
           
            
        )
    }
}

export default connect() (EditComponent);