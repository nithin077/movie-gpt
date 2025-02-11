import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./UserSlice";

const appStore = configureStore({
    reducer : {
        user : UserReducer
    }
});

export default appStore;