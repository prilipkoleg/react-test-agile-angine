import * as types from "../constants/Actions";

const initialState = {
  is_loading: false,
  products: {},
};

const shopReducer = (state = initialState, action) => {
  switch(action.type){
    case types.ADD_PRODUCT:
      state = {
        ...state,
        is_loading: true
      };
      break;
    case types.ADD_PRODUCT_SUCCESS:
      if (!action.payload.status)
        console.log('Api error:', action.payload.error);

      state = {
        ...state,
        is_loading: false
      };
      break;
    case types.REMOVE_PRODUCT:
      state = {
        ...state,
        is_loading: true
      };
      break;
    case types.REMOVE_PRODUCT_SUCCESS:
      if (!action.payload.status)
        console.log('Api error:', action.payload.error);

      state = {
        ...state,
        is_loading: false
      };
      break;
    case types.FETCH_PRODUCTS:
      state = {
        ...state,
        is_loading: true
      };
      break;
    case types.FETCH_PRODUCTS_SUCCESS:
      state = {
        ...state,
        is_loading: false,
        products: action.payload ? action.payload : {}
      };
      break;
    case types.API_ERROR:
      console.log("XHR ERROR:", action.payload);
      break;
    default:
  }
  return state;
};

export default shopReducer;