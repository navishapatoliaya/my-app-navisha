import React, { Component } from "react";
import '../App.css';
import {connect} from "react-redux";
import {getPosts} from "../action";
import Item from "../component/Item";


class RootContainer  extends Component {
    componentDidMount() {
        console.log('called')
        //this.props.getPosts();
        const { getPosts  } = this.props;
        getPosts ();
    }
    render(){
        const {error, isLoading, posts } = this.props;
        return(
            <div>
            {error && <div>{error}</div>}
            {
                !isLoading?
                <table>
                    <thead>
                        <tr>
                            <th>userId</th>
                            <th>id</th>
                            <th>title</th>
                            <th>body</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        {posts && posts.length !== 0 && posts.map((posts, index) => <Item data={posts} key={index}/> )}
                    </tbody>
                </table>
              :
              <div className="loader"></div>
            }
            </div>
        );
      }
    }

  const mapStateToProps = state => ({
    posts: state.postData.posts,
    isLoading: state.postData.isLoading,
    error: state.postData.error,
  });

  const mapDispatchToProps = {
    getPosts
  };
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(RootContainer);