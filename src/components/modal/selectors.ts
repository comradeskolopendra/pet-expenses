import { RootState } from "../../store/types";

export const getStateIsVisible = (store: RootState): boolean => store.modal.isVisible;