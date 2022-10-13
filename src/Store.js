import { legacy_createStore as createStore } from "redux";
import { reducer } from "./Reducer/Reducer";


export const Store = createStore(reducer)