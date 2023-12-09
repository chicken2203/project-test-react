import loginReducer from './loginSlice';
import productsReducer from './productsSlice';

const RootReducer = {
    login: loginReducer,
    products: productsReducer,
};

export default RootReducer;
