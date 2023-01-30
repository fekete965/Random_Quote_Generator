import { configureStore } from "@reduxjs/toolkit";
import bookmarksReducer from "./bookmarksSlice"

const store = configureStore({
    reducer: {
        bookmarks: bookmarksReducer,
    }
})

export default store
export type AppDispatch = typeof store.dispatch