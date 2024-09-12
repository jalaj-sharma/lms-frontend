import { createSlice } from "@reduxjs/toolkit";

const initialstate= {
    isLoggedIn: localStorage.getitem('isLoggedIn') || false,
    role: localStorage.getItem('role') || '',
    data: localStorage.getItem('data') || {}
};

const AuthSlice= createSlice({
    name: 'auth',
    initialstate,
    reducers:{},
})

// export const {}=AuthSlice.actions;
export default AuthSlice.reducer;