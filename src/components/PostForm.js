import React, { Component } from "react";
import {connect} from 'react-redux';
import { Form,  Button, Typography  } from 'antd';
import "antd/dist/antd.css";


class PostForm extends Component {
  handleSubmit = e => {
    e.preventDefault();
    const name = this.getName.value;
    const description = this.getDescription.value;
    const data = {
      id: new Date(),
      name,
      description,
      editing: false,
    };
  
     this.props.dispatch({
        type:'ADD_POST',
        data
    })
        
    this.getName.value="";
    this.getDescription.value ="";
  };
  render() {
     const { getFieldDecorator } = this.props.form;
     const { Title } = Typography;
    return (
      <div >
        <Title level={2}> You are adding a new element</Title>
        <Form labelCol={{span: 6}} wrapperCol={{span:6}} onSubmit={this.handleSubmit}>
         
         <Form.Item label="Name">
           {getFieldDecorator('name', {
             rules: [{ message: 'Enter name!'}],
           })(
             <input  ref={input => (this.getName = input)} autoComplete="off" required/>)}
         </Form.Item>
         
         <Form.Item label="Description">
           {getFieldDecorator('description', {
             rules: [{ message: 'Enter a description!'}],
           })(<textarea  ref={input => (this.getDescription = input)}
           autosize={{ minRows: 4, maxRows: 8 }} required/>)}
          </Form.Item>
          
          <Form.Item wrapperCol={{span: 8, offset: 5}}>
           <Button type="primary" htmlType="submit">
              Create
            </Button>
          </Form.Item>

        </Form>
      </div>
    );
  }
}


export default connect() (Form.create()(PostForm));
