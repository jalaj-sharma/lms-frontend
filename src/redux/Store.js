import { configureStore } from "@reduxjs/toolkit";

import authsliceReducer from './slices/AuthSlice.js'
const Store=configureStore({
    reducer: {
        auth: authsliceReducer
    },
    devTools: true
})

export default Store;