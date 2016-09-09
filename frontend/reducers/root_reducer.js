import { combineReducers } from 'redux';
import SessionReducer from 'reducers/session/session_reducer';
import BusinessReducer from 'reducers/businesses/business_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  business: BusinessReducer
});

export default RootReducer;