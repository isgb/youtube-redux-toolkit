import {configureStore} from "@reduxjs/toolkit";

let usersReducer = {};

const store = configureStore({
    reducer:{
        data:{
            users: usersReducer
        },
    },
});

export default store;