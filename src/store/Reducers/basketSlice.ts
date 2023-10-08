import { Itype } from "./../../types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type BasketState = {
  basket: {
    item: Itype;
    quantity: number;
  }[];
};
const initialState: BasketState = {
  basket: [],
};
export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action: PayloadAction<Itype>) => {
      const existingItem = state.basket.find(
        (item) => item.item.id === action.payload.id
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.basket.push({ item: action.payload, quantity: 1 });
      }
    },
    detetToCart: (state, action: PayloadAction<Itype>) => {
      state.basket = state.basket.filter((el) => el.item.id !== action.payload.id);
      // const existingItem = state.basket.find(
      //   (item) => item.item.id === action.payload.id
      // );

      // if (existingItem) {
      //   existingItem.quantity -= 1;
      //   if (existingItem.quantity === 0) {
      //     state.basket = state.basket.filter(
      //       (item) => item.item.id !== action.payload.id
      //     );
      //   }
      // }
    },

    decreaseQuantity: (state, action: PayloadAction<Itype>) => {
      const existingItem = state.basket.find(
        (item) => item.item.id === action.payload.id
      );

      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity -= 1;
      }
    },

    increaseQuantity: (state, action: PayloadAction<Itype>) => {
      const existingItem = state.basket.find(
        (item) => item.item.id === action.payload.id
      );

      if (existingItem) {
        existingItem.quantity += 1;
      }
    },
  },
});
export const { addToBasket, detetToCart, decreaseQuantity, increaseQuantity } =
  basketSlice.actions;
export default basketSlice.reducer;
