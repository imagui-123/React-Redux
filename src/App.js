import React, { Component } from 'react';
import PostForm from './components/PostForm';
import AllPost from './components/AllPost';
import { Row, Col, Typography, Icon } from 'antd';
import "antd/dist/antd.css";

class App extends Component {
  
  render(){
    const { Title } = Typography;
  return (
    <div >
      <div className="navbar">
        <Title level={2} ><Icon type="smile" theme="outlined" /> Welcome!</Title> 
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
