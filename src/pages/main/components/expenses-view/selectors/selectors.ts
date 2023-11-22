import type { RootState } from "../../../../../store/types";

interface IExepenses {
    price: number;
    name: string;
    date: string;
    id: string;
}

export const getExpenses = (store: RootState): IExepenses[] =>
    store.expenses.expenses;
