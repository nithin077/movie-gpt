import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./UserSlice";
import MovieReducer from "./MovieSlice";
import GptReducer from "./GptSlice";
import ConfigReducer from "./ConfigSlice";

const appStore = configureStore({
    reducer : {
        user : UserReducer,
        movies : MovieReducer,
        gpt : GptReducer,
        config : ConfigReducer
    }
});

export default appStore;