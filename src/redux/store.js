import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
// import { } from '@reduxjs/toolkit/dist/devtoolsExtension';
// import thunkMiddleware from 'redux-thunk';
import { reducer } from "./reducer";

// const middleware = [ thunkMiddleware ];
// const middlewareEnhancer = applyMiddleware(...middleware)
// const enhancers = [ middlewareEnhancer ];
// const composedEnhancers = composeWithDevTools(...enhancers)

// const store = createStore(reducer, undefined, composedEnhancers)

const store = configureStore({reducer});

export default store;