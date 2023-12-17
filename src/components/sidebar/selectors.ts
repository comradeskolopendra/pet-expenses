import type { RootState } from "../../store/types";

export const getStateVisibleSidebar = (store: RootState): boolean => store.expenses.visibleSidebar;