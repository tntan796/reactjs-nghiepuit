import {combineReducers} from 'redux';
import productListReducer from './product-list.reducer';
import productReducer from './product.reducer';
const connectApiReducer = combineReducers({
    products: productListReducer,
    productEdit: productReducer
})
export default connectApiReducer;