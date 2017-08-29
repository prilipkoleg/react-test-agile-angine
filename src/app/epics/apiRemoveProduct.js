import 'rxjs';
import { ajax } from 'rxjs/observable/dom/ajax';
import { REMOVE_PRODUCT, REMOVE_PRODUCT_SUCCESS, API_ERROR } from "../constants/Actions";
import { API_URL } from "../constants/Config";

const apiRemoveProductEpic = action$ =>
  action$.ofType(REMOVE_PRODUCT)
    .mergeMap(
      ({ payload }) =>
        ajax(`${API_URL}/product/remove/${payload}`)
          .map(xhr => ({
            type: REMOVE_PRODUCT_SUCCESS,
            payload: xhr.response,
            xhr: xhr
          }))
          .catch(err => ({
            type: API_ERROR,
            payload: err
          }))
    );

export default apiRemoveProductEpic;