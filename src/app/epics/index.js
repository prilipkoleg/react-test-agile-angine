import { combineEpics, createEpicMiddleware } from 'redux-observable';
import apiAddProductEpic from './apiAddProduct';
import apiRemoveProductEpic from './apiRemoveProduct';
import apiFetchProductsEpic from "./apiFetchProducts";

const combinedEpics =  combineEpics(
  apiAddProductEpic,
  apiRemoveProductEpic,
  apiFetchProductsEpic
);

const epicMiddleware = createEpicMiddleware(combinedEpics);

export default epicMiddleware;