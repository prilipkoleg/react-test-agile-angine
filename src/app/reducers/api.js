import * as types from "../constants/Actions";

const initialState = {
  isFetching: false
};

const apiReducer = (state = initialState, action) => {
  switch(action.type){
    case types.API_FETCH_PRODUCTS:
      console.log(types.API_FETCH_PRODUCTS,action.payload);
      break;
    case types.API_ADD_PRODUCT:
      console.log(types.API_ADD_PRODUCT,action.payload);
      break;
    case types.API_REMOVE_PRODUCT:
      console.log(types.API_REMOVE_PRODUCT,action.payload);
      break;
    default:
  }
  return state;
};

export default apiReducer;