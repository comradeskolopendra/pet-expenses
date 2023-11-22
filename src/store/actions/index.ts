import { addExpense, removeExpense } from "./expenses";

export type TActions =
    | ReturnType<typeof addExpense>
    | ReturnType<typeof removeExpense>;
