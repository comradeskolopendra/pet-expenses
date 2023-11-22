import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { expensesReducer } from "./store";
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    expenses: expensesReducer,
});

const store = configureStore({
    reducer: rootReducer,
    middleware: [thunk],
    devTools: true
});

export default store;
