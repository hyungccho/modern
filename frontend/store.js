import { createStore, compose } from 'redux';
import RootReducer from 'reducers/root_reducer';
import RootMiddleware from 'middlewares/root_middleware'

const configureStore = (preLoadedState = {}) => {
  return createStore(
    RootReducer,
    preLoadedState,
    compose(RootMiddleware, window.devToolsExtension ? window.devToolsExtension() : f => f)
  );
};

export default configureStore;