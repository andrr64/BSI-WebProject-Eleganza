import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: null,
    loading:false
};

const serverSlice = createSlice({
    name: 'server',
    initialState,
    reducers: {
        serverLoading: (state) => {
            state.loading = true;
            state.status = true;
        },
        serverFailure: (state) => {
            state.loading = false;
            state.status = false;
        }
    }
});

export const {
    serverLoading,
    serverFailure
} = serverSlice.actions;
export default serverSlice.reducer;