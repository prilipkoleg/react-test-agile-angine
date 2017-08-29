import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import rootReducer from '../reducers';
import epicMiddleware from '../epics';

export default function configureStore(initialState = {}) {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(
      createLogger(),
      epicMiddleware
    )
  );
}