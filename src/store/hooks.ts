import {
    TypedUseSelectorHook,
    useSelector as selectorHook,
    useDispatch as dispatchHook,
} from "react-redux";
import type { RootState, AppDispatch } from './types';

const useAppSelector: TypedUseSelectorHook<RootState> = selectorHook;
const useAppDispatch = () => dispatchHook<AppDispatch>();

export { useAppDispatch, useAppSelector };
