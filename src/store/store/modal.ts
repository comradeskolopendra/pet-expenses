import { PayloadAction, createReducer } from "@reduxjs/toolkit";
import { changeModalVisible } from "../actions/modal";

interface IModalState {
    isVisible: boolean
}

const initialState: IModalState = {
    isVisible: false
}

const modalReducer = createReducer(
    initialState,
    (builder) => {
        builder.addCase(changeModalVisible, (state, action: PayloadAction<boolean>) => {
            state.isVisible = action.payload;

            return state;
        })
    }
)

export default modalReducer;