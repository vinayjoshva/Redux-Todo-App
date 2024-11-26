//steps to work with reduxToolkit
//first configure the store
//next export the store using a variable and ensure that store is an object
// next get out of the store and create features

//after some time in todoSlice.js...we're back again to share the reducer's knowl

import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice";

export const store = configureStore({
  reducer: todoReducer,
});
