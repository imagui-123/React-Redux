import React, { Component } from 'react';
import PostForm from './components/PostForm';
import AllPost from './components/AllPost';
import { Row, Col } from 'antd';
import "antd/dist/antd.css";

class App extends Component {
  render(){
  return (
    <div >
      <div className="navbar">
        <h2 className="center">Welcome!</h2>
      </div>
      <Row type="flex" justify="space-around" >
        <Col span={6}>
        <AllPost />
        </Col>
        <Col span={10}>
        <PostForm />
        </Col>
      </Row>     
    </div>
   );
  }
}

export default App;
