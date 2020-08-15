import {combineReducers} from 'redux';
import productListReducer from './product-list.reducer';

const connectApiReducer = combineReducers({
    products: productListReducer
})
export default connectApiReducer;