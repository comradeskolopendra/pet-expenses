import { createAction } from "@reduxjs/toolkit";

interface IAddExpense {
    price: number;
    name: string;
    date: string;
    id: string;
}

const addExpense = createAction<IAddExpense, "ADD_EXPENSE">("ADD_EXPENSE");
const removeExpense = createAction<string, "REMOVE_EXPENSE">("REMOVE_EXPENSE");

export { addExpense, removeExpense };
