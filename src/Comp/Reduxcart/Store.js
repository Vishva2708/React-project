import { legacy_createStore as createStore } from "redux"
import { myreducer } from "./Reducer"
export const myStore=createStore(myreducer)