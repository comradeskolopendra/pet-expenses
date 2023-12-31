import { createAction } from "@reduxjs/toolkit";
import { IMonths, ECurrency } from "../types";

interface IAddExpense {
    price: number;
    name: string;
    date: string;
    id: string;
    month: IMonths,
    currency: ECurrency
};

const addExpense = createAction<IAddExpense, "ADD_EXPENSE">("ADD_EXPENSE");
const removeExpense = createAction<string, "REMOVE_EXPENSE">("REMOVE_EXPENSE");
const updateVisibleSidebar = createAction<boolean, "UPDATE_VISIBLE_REPORT">("UPDATE_VISIBLE_REPORT");

export { addExpense, removeExpense, updateVisibleSidebar };
