import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { products } from "./productService";
export const product = createAsyncThunk("product", async () => {
  try {
    const data = await products.productdata();
    return data;
  } catch (e) {
    return e.response.data.message;
  }
});
export const singleproduct = createAsyncThunk("singleproduct", async (id) => {
  try {
    const data = await products.Indivisualproduct(id);
    return data;
  } catch (e) {
    return e.response.data.message;
  }
});
const iniitial = {
  product: "",
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};
const singlep = {
  singleproduct: "",
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};
const productSlice = createSlice({
  name: "product",
  initialState: iniitial,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(product.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(product.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.product = action.payload;
      })
      .addCase(product.rejected, (state, action) => {
        state.isError = true;
        state.message = action.payload;
      });
  },
});
const singleSlice = createSlice({
  name: "singleproduct",
  initialState: singlep,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(singleproduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(singleproduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.singleproduct = action.payload;
      })
      .addCase(singleproduct.rejected, (state, action) => {
        state.isError = true;
        state.message = action.payload;
      });
  },
});
export default productSlice.reducer;
export { singleSlice };
