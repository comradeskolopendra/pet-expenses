import { createReducer } from '@reduxjs/toolkit';
import { addExpense, removeExpense } from '../actions/expenses';

interface IExepenses {
  price: number;
  name: string;
  date: string;
  id: string;
}

interface IInitialState {
  expenses: IExepenses[];
}

const initialState: IInitialState = {
  expenses: []
}

const expensesReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addExpense, (state, action) => {
      const expense = action.payload;
      state.expenses = [...state.expenses, expense];

      return state;
    })
    .addCase(removeExpense, (state, action) => {
      const id = action.payload;
      state.expenses = [...state.expenses].filter(expense => expense.id !== id);

      return state;
    })
})

export default expensesReducer;
