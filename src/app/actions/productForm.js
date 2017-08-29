import { ADD_PRODUCT } from '../constants/Actions'

export default function addProduct(product) {
  return {
    type: ADD_PRODUCT,
    payload: product
  }
}