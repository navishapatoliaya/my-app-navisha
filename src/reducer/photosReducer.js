import initialState from "./initialState";

const photosReducer = (state = initialState.photoData, action) => {
        switch (action.type) {
          case 'GET_PHOTOS_STARTED':
            return {
              ...state,
              isLoading: true,
              error: null
            };
          case 'GET_PHOTOS_SUCCEEDED':
            return {
              ...state,
              photo: action.payload,
              isLoading: false
            };
          case 'GET_PHOTOS_FAILED':
            return {
              ...state,
              isLoading: false,
              error: action.payload
            };
            default:
            return state;
        }
      };
      
      export default photosReducer;
      