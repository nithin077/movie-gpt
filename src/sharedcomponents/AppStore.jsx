import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./UserSlice";
import MovieReducer from "./MovieSlice";

const appStore = configureStore({
    reducer : {
        user : UserReducer,
        movies : MovieReducer
    }
});

export default appStore;