import type { RootState } from "../../../store/types";

export const getNotifyMessageState = (store: RootState): string => store.notify.message;
export const getNotifyTypeState = (store: RootState): "warning" | "error" | "" => store.notify.type;