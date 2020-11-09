import React from "react";
import ReactDom from "react-dom";
/*
 ********************react-router-dom*******************
 */

import App from "./reat-rout/modules/App";
ReactDom.render(<App />, document.getElementById("root"));
/*
 **************redux*****************************
 */
// import store from "./store";
// import { addToCart, updateCart, deleteFromCart } from "./rdx/actions/cartActions";
// console.log("initialState", store.getState());

// let unsubscribe = store.subscribe(() => console.log(store.getState()));

// store.dispatch(addToCart("coffee 500gm", 1, 250));
// store.dispatch(addToCart("flour 100g", 1, 250));
// store.dispatch(addToCart("juice 2L", 1, 250));
// store.dispatch(updateCart("flour 100g", 100, 250));
// store.dispatch(deleteFromCart("coffee 500gm", 1, 250));
// unsubscribe();

/*
 *****************react-redux******************
 */
// import store from "./store";
// import { Provider } from "react-redux";
// import App from './reat-rdx/containerComponents/index'
// ReactDom.render(
//   <Provider store={store}>
//     <App/>
//   </Provider>,
//   document.getElementById("root")
// );
