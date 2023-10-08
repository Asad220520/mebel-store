import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "./Reducers/basketSlice";
import favoriteReducer from "./Reducers/favoriteSlice";
import { userReducer } from "./Reducers/userSlice";

export const store = configureStore({
  reducer: {
    basket: basketReducer,
    favorite: favoriteReducer,
    user: userReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
