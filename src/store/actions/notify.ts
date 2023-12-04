import { createAction } from "@reduxjs/toolkit";

interface IOpenNotifyPayload {
    message: string;
    type: "warning" | "error" | "";
}

const openNotify = createAction<IOpenNotifyPayload, "OPEN_NOTIFY">("OPEN_NOTIFY");
const clearNotify = createAction<undefined, "CLEAR_NOTIFY">("CLEAR_NOTIFY")

export { openNotify, clearNotify }