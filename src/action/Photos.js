import Axios from "axios";

const getPhotosStarted = () => ({
    type: 'GET_PHOTOS_STARTED'
  });
  
  const getPhotosSucceeded = data => ({
    type: 'GET_PHOTOS_SUCCEEDED',
    payload: data
  });
  
  const getPhotosFailed = error => ({
    type: 'GET_PHOTOS_FAILED',
    payload: error,
    error: true
  });
  
export const getPhoto = () => {
        return dispatch => {
          dispatch(getPhotosStarted());
      
          const url = "https://jsonplaceholder.typicode.com/photos";
      
          Axios.get(`${url}`)
            .then(function (response) {
              dispatch(getPhotosSucceeded(response.data));
            })
            .catch(function (error) {
              dispatch(getPhotosFailed(error));
            });
        };
      }

    