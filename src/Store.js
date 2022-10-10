import { legacy_createStore as createStore } from "redux";
import { reducer } from "./Reducer";

export const Store = createStore(reducer)