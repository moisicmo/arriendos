import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'checking', // 'authenticated','not-authenticated',
        user: {},
        data: {},
    },
    reducers: {
        onChecking: (state) => {
            state.status = 'checking';
            state.user = {};
        },
        onLogin: (state, { payload }) => {
            state.status = 'authenticated';
            state.data = payload;
        },
        onLogout: (state) => {
            state.status = 'not-authenticated';
            state.user = {};
        },

        onLoginStudent: (state, { payload }) => {
            state.user = payload;
        },
    }
});


// Action creators are generated for each case reducer function
export const { onChecking, onLogin, onLogout, onLoginStudent } = authSlice.actions;