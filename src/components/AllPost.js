import React, { Component } from "react";
import { connect} from 'react-redux';
import Post from '../Post';
import EditComponent from './EditComponent';
import { Typography } from 'antd';
import "antd/dist/antd.css";




class AllPost extends Component {
  render() {
    const { Title } = Typography;
    return (
      <div>
      <Title level={2}>All elements </Title>
        {this.props.posts.map((post) => (
          <div key={post.id}>
            {post.editing ? <EditComponent post={post} key={post.id}/> : 
           <Post key={post.id} post={post} />}
      </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) =>{
    return{
        posts: state
    }
}

export default connect(mapStateToProps)(AllPost);
