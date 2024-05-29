/*
    File: store.js
    Deskripsi: Konfigurasi Redux store untuk aplikasi
*/
import { configureStore, combineReducers } from "@reduxjs/toolkit"; // Import fungsi-fungsi yang diperlukan dari Redux Toolkit
import userReducer from "./user/userSlice.js"; // Import reducer untuk pengelolaan state pengguna (user)

import { persistReducer } from "redux-persist"; // Import fungsi persistReducer untuk konfigurasi penyimpanan persisten state Redux
import storage from "redux-persist/lib/storage"; // Import modul penyimpanan persisten untuk Redux
import persistStore from "redux-persist/es/persistStore"; // Import fungsi persistStore untuk pembuatan persistor Redux

// Menggabungkan semua reducer menjadi satu root reducer
const rootReducer = combineReducers({
    user: userReducer,
});

// Konfigurasi untuk penyimpanan persisten Redux
const persistConfig = {
    key: 'root', // Kunci penyimpanan persisten
    storage, // Jenis penyimpanan yang akan digunakan (dalam kasus ini, penyimpanan lokal)
    version: 1 // Versi penyimpanan persisten (digunakan untuk penanganan perubahan struktur state)
};

// Menggunakan persistReducer untuk membuat reducer yang akan melakukan penyimpanan persisten
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Membuat store Redux dengan konfigurasi reducer yang telah ditetapkan
export const store = configureStore({
    reducer: persistedReducer, // Reducer yang akan digunakan oleh store
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware({
            serializableCheck: false, // Menonaktifkan pemeriksaan serialisasi untuk redux-persist
        })
});

// Membuat persistor untuk penyimpanan persisten Redux
export const persistor = persistStore(store);
