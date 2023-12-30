import { addExpense, removeExpense, updateVisibleSidebar } from "./expenses";
import { clearNotify, openNotify } from "./notify";
import { changeModalVisible } from "./modal";

export type TActions =
    | ReturnType<typeof addExpense>
    | ReturnType<typeof removeExpense>
    | ReturnType<typeof openNotify>
    | ReturnType<typeof clearNotify>
    | ReturnType<typeof updateVisibleSidebar>
    | ReturnType<typeof changeModalVisible>;
