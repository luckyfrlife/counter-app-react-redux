import { createStore } from "redux";
import counterReducer from "./counter/counterReducer";
// TODO: add reducer function later
const store = createStore(counterReducer);

export default store;
