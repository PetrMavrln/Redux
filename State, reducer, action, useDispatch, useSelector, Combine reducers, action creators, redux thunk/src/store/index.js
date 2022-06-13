import { applyMiddleware, combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { cashReducer } from "./reducers/cashReduces";
import { customerReducer } from "./reducers/customerReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    cash: cashReducer,
    customers: customerReducer,
});

export const store = configureStore({reducer: rootReducer}, composeWithDevTools(applyMiddleware(thunk)));
