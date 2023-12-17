import type { IExpenses, IMonths, RootState } from "../../../../store/types";

export const getExpensesState = (store: RootState): IExpenses[] => store.expenses.expenses;