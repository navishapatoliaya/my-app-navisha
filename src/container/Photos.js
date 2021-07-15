import React, { Component } from "react";
import '../App.css';
import {connect} from "react-redux";
import {getPhoto} from "../action";
import PhotoItem from "../component/PhotoItem";  

class Photos extends Component {
    componentDidMount() {
        console.log('called')
        this.props.getPhoto();
        const { getPhoto } = this.props;
        getPhoto();
    }
    render(){
        const {error, isLoading, photo} = this.props;
        return(
            <div>
            {error && <div>{error}</div>}
            {   
                !isLoading?
                <table>
                    <thead>
                            <th>albumId</th>
                            <th>id</th>
                            <th>title</th>
                            <th>url</th>
                            <th>thumbnailUrl</th>
                    </thead>
                    <tbody>
                    {photo && photo.length !== 0 && photo.map((photo, index) => <PhotoItem data={photo} key={index}/> )}
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
    photo: state.photoData.photo,
    isLoading: state.photoData.isLoading,
    error: state.photoData.error,
    });

const mapDispatchToProps = {
    getPhoto
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Photos);