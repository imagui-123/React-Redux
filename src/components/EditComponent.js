import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Form,  Button, Typography } from 'antd';
import "antd/dist/antd.css";

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
        const { Title } = Typography;
        return (
            <div>
            <Title level={2}>You are editing</Title>
                <Form  onSubmit={this.handleEdit} className="login-form">
                    <Form.Item label = "Name">
                        <input ref={(input)=> this.getName=input} defaultValue={this.props.post.name} />
                    </Form.Item>
                    <Form.Item label="Description">
                        <textarea ref={(input) => this.getDescription = input} defaultValue={this.props.post.description} />
                    </Form.Item>
                    <Form.Item wrapperCol={{span:12 , offset: 5}}>
                        <Button type="primary" htmlType="submit">
                            Update
                        </Button>
                    </Form.Item>
                </Form>
            </div>
           
          
        )
    }
}

export default connect() (EditComponent);