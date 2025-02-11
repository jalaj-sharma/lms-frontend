import { createSlice } from "@reduxjs/toolkit";

const initialstate= {
    isLoggedIn: localStorage.getItem('isLoggedIn') || false,
    role: localStorage.getItem('role') || '',
    data: localStorage.getItem('data') || {},
};

const AuthSlice= createSlice({
    name: 'auth',
    initialState:initialstate,
    reducers:{},
})

// export const {}=AuthSlice.actions;
export default AuthSlice.reducer;        //####  remove reducer if it is showing error