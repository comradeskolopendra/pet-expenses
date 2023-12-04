import { createReducer } from "@reduxjs/toolkit";
import { clearNotify, openNotify } from "../actions/notify";

interface IInitialState {
    open: boolean;
    message: string;
    type: "warning" | "error" | "";
}

const initialState: IInitialState = {
    open: false,
    message: "",
    type: ""
}

const notifyReducer = createReducer(initialState, builder => {
    builder
        .addCase(openNotify, (state, action) => {
            const { type, message } = action.payload;

            if (!type || !message) {
                console.log("Не передан тип или сообщение в нотифай!");
                return state;
            }

            state.message = message;
            state.type = type;
            state.open = true;

            return state;
        })
        .addCase(clearNotify, (state, action) => {
            state = {
                open: false,
                message: "",
                type: ""
            }

            return state;
        })
})

export default notifyReducer;