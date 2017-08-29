import { REMOVE_PRODUCT, FETCH_PRODUCTS } from '../constants/Actions'

export function removeProduct(id) {
  return {
    type: REMOVE_PRODUCT,
    payload: id
  }
}

export function fetchProducts() {
  return {
    type: FETCH_PRODUCTS
  }
}

