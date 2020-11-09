import {combineReducers} from 'redux'
import productsReducer from './productsReducer';
import cartReducer from './cartReducers'

const allReducers = {
  products: productsReducer,
  shoppingCart: cartReducer,
};

const rootReducer = combineReducers(allReducers);

export default rootReducer