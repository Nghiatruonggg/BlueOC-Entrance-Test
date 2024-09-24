import { combineSlices, configureStore } from "@reduxjs/toolkit";
import postsCRUDSlice from "../reducers/postsCRUDSlice";

const rootReducer = combineSlices({
    postsCRUD: postsCRUDSlice,
});

const store = configureStore({
    reducer: rootReducer
});

export default store