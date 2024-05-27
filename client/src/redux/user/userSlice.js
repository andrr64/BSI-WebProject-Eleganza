/*
    File: userSlice.js
    Deskripsi: Definisi slice Redux untuk manajemen state pengguna (user)
*/

import { createSlice } from "@reduxjs/toolkit"; // Import fungsi createSlice dari Redux Toolkit

// State awal untuk slice pengguna
const initialState = {
    currentUser: null, // Data pengguna yang sedang login
    error: null, // Pesan error (jika ada)
    loading: false // Status loading
};

// Membuat slice Redux untuk pengelolaan state pengguna
const userSlice = createSlice({
    name: 'user', // Nama slice
    initialState, // State awal
    reducers: {
        // Reducer untuk tanda mulai proses masuk (sign-in)
        signInStart: (state) => {
            state.loading = true; // Set status loading menjadi true
        },
        // Reducer untuk tanda masuk (sign-in) berhasil
        signInSuccess: (state, action) => {
            state.currentUser = action.payload; // Set pengguna saat ini dengan data pengguna yang berhasil masuk
            state.loading = false; // Set status loading menjadi false
            state.error = null; // Kosongkan pesan error
        },
        // Reducer untuk tanda masuk (sign-in) gagal
        signInFailure: (state, action) => {
            state.error = action.payload; // Set pesan error dengan pesan yang diberikan
            state.loading = false; // Set status loading menjadi false
        },
        // Reducer untuk tanda mulai proses keluar (sign-out)
        signOutStart: (state) => {
            state.loading = true; // Set status loading menjadi true
        },
        // Reducer untuk tanda keluar (sign-out) berhasil
        signOutSuccess: (state) => {
            state.currentUser = null; // Kosongkan data pengguna saat ini
            state.error = null; // Kosongkan pesan error
            state.loading = false; // Set status loading menjadi false
        }, 
        // Reducer untuk tanda keluar (sign-out) gagal
        signOutFailed: (state, action) => {
            state.error = action.payload; // Set pesan error dengan pesan yang diberikan
            state.loading = false; // Set status loading menjadi false
        }
    }
});

// Eksport action creators dan reducer dari slice pengguna
export const { 
    signInStart, 
    signInFailure, 
    signInSuccess, 
    signOutStart, 
    signOutFailed, 
    signOutSuccess, 
} = userSlice.actions;
export default userSlice.reducer;
