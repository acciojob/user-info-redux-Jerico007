import formReducer from "./Reducer/formReducer";

import { createStore } from "redux";

const store = createStore(formReducer);
export default store;