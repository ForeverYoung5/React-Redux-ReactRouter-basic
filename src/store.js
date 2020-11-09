/*
 ***********react-redux***********
 */
import { createStore } from "redux";
import counter from "./reat-rdx/reducers/index";

const store = createStore(counter);
export default store;

/*
 **************redux*************
 */
// import {createStore} from 'redux'
// import rootReducer from './rdx/reducers/index'
// import {composeWithDevTools} from 'redux-devtools-extension'

// let store = createStore(rootReducer,composeWithDevTools());

// export default store
