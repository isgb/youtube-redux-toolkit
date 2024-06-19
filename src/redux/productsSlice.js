import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
    name:"products",
    initialState: [],
    reducers:{
        readProducts: (state, action) => {},
        createProduct: (state, action) => {},
        updateProduct: (state, action) => {},
        deleteProduct: (state, action) => {},
    }
})

export const {readProducts,createProduct,updateProduct,deleteProduct}
= productsSlice.actions;

export default productsSlice.reducer;