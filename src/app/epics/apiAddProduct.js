import "rxjs";
import { ajax } from "rxjs/observable/dom/ajax";
import { ADD_PRODUCT, ADD_PRODUCT_SUCCESS, API_ERROR } from "../constants/Actions";
import { API_URL } from "../constants/Config";

const apiAddProductEpic = action$ =>
  action$.ofType(ADD_PRODUCT)
    .mergeMap(
      ({ payload }) =>
        ajax({
          url: `${API_URL}/product/add`,
          method: "POST",
          body: {product: payload},
          headers: {'Content-Type': 'application/json'}
        })
        .map(xhr => ({
          type: ADD_PRODUCT_SUCCESS,
          payload: xhr.response,
          xhr: xhr
        }))
        .catch(err => ({
          type: API_ERROR,
          payload: err
        }))
    );

export default apiAddProductEpic;