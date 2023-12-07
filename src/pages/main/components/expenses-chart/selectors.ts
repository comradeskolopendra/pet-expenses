import type { RootState, IExpenses } from "../../../../store/types";

export const getStateExpenses = (store: RootState): IExpenses[] => store.expenses.expenses;