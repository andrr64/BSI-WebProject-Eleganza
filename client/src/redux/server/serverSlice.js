import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: null,
    loading:false
};

const serverSlice = createSlice({
    name: 'server',
    initialState,
    reducers: {
        serverLoading: (state, action) => {
            state.loading = true;
            state.status = action.payload;
        },
        serverFailure: (state) => {
            state.loading = false;
            state.status = false;
        },
        serverLoadingOk: (state) => {
            state.loading = false;
        },
        serverOk: (state) => {
            state.status = true;
        }
    }
});

export const {
    serverLoading,
    serverFailure,
    serverLoadingOk,
    serverOk
} = serverSlice.actions;
export default serverSlice.reducer;