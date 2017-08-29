import 'rxjs';
import { ajax } from 'rxjs/observable/dom/ajax';
import {ADD_PRODUCT_SUCCESS,REMOVE_PRODUCT_SUCCESS,FETCH_PRODUCTS_SUCCESS,API_ERROR,FETCH_PRODUCTS} from "../constants/Actions";
import { API_URL } from "../constants/Config";

const apiFetchProductsEpic = action$ =>
  action$.ofType(ADD_PRODUCT_SUCCESS,REMOVE_PRODUCT_SUCCESS, FETCH_PRODUCTS)
    .mergeMap(
      ({ payload }) =>
        ajax.getJSON(`${API_URL}/products`)
          .map(response => ({
            type: FETCH_PRODUCTS_SUCCESS,
            payload: response
          }))
          .catch(err => ({
            type: API_ERROR,
            payload: err
          }))
    );

export default apiFetchProductsEpic;