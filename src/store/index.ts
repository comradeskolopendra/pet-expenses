import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { expensesReducer, notifyReducer } from "./store";
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    expenses: expensesReducer,
    notify: notifyReducer
});

const store = configureStore({
    reducer: rootReducer,
    middleware: [thunk],
    devTools: true
});

export default store;
