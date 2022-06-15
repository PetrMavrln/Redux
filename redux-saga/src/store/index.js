import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import { rootWatcher } from "../saga/indes";
import countReducer from "./countReducer";
import userReducer from "./userReducer";


const rootReducer = combineReducers({
    countReducer,
    userReducer
});

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            thunk: false,
            immutableCheck: false,
            serializableCheck: false
        }).concat(sagaMiddleware)
});

sagaMiddleware.run(rootWatcher);