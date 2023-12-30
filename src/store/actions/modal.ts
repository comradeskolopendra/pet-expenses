import { createAction } from "@reduxjs/toolkit";

const changeModalVisible = createAction<boolean, "CHANGE_MODAL_VISIBE">("CHANGE_MODAL_VISIBE");

export {
    changeModalVisible
}