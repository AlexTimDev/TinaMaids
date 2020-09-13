// /*******
//  * configureStore
//  * Set up and configure store, reducers and epics
//  */
// import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
// import createSagaMiddleware from 'redux-saga';
// import { takeEvery, all } from 'redux-saga/effects';

// /* Reducers */
// import { order } from './Home/reducer';
// import { comment } from './OrderDetail/reducer';
// import { status } from './OrderStatus/reducer';

// /* Sagas */
// import { getOrderSaga } from './Home/sagas';
// import { createCommentSaga } from './OrderDetail/sagas';
// import { updateOrderSaga } from './OrderStatus/sagas';

// /* Actions    */
// import { GET_ORDER } from './Home/types';
// import { CREATE_COMMENT } from './OrderDetail/types';
// import { UPDATE_ORDER } from './OrderStatus/types';

// const rootReducer = combineReducers({
//   order,
//   comment,
//   status
// });

// const sagaMiddleware = createSagaMiddleware();

// function* watchAll() {
//   yield all([
//     takeEvery(GET_ORDER, getOrderSaga),
//     takeEvery(CREATE_COMMENT, createCommentSaga),
//     takeEvery(UPDATE_ORDER, updateOrderSaga)
//   ]);
// }

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// export const configureStore = () => {
//   const store = createStore(
//     rootReducer,
//     composeEnhancers(applyMiddleware(sagaMiddleware))
//   );
//   sagaMiddleware.run(watchAll);
//   return store;
// };
