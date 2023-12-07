import { addExpense, removeExpense, updateVisibleSidebar } from "./expenses";
import { clearNotify, openNotify } from "./notify";

export type TActions =
    | ReturnType<typeof addExpense>
    | ReturnType<typeof removeExpense>
    | ReturnType<typeof openNotify>
    | ReturnType<typeof clearNotify>
    | ReturnType<typeof updateVisibleSidebar>;
