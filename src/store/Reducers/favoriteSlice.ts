import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Itype } from "../../types";

type favorite = {
  favorite: Itype[];
};
const initialState: favorite = {
  favorite: [],
};
export const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    addToFavorite: (state, action: PayloadAction<Itype>) => {
      const res = state.favorite.find((find) => find.id === action.payload.id);
      if (res) {
        state.favorite = state.favorite.filter(
          (el) => el.id !== action.payload.id
        );
      } else {
        state.favorite.push(action.payload);
      }
    },
  },
});
export const { addToFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;
