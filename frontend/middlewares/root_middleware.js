import { applyMiddleware } from 'redux';

// Middlewares
import SessionMiddleware from 'middlewares/session/session_middleware';
import BusinessMiddleware from 'middlewares/businesses/business_middleware';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  BusinessMiddleware
);

export default RootMiddleware;