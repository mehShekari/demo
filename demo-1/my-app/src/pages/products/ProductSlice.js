import { createSlice, createAsyncThunk, createEntityAdapter } from "@reduxjs/toolkit";
import callApi from "../../api/apiClient";

export const getAllProducts = createAsyncThunk('product/fetchData', async (service, { getState }) => {
  const response = await callApi(service);
  console.log(products(getState()));
  return response
});

const productsAdapter = createEntityAdapter();

export const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    modals: [],
    status: 'idle',
    error: null
  },

  reducers: {
    addModal: {
      reducer(state, action) {
        state.modals.push(action.payload);
      },

      prepare(id, status) {
        return {
          payload: {
            id,
            status
          }
        }
      }
    },

    closeModal(state, action) {
      let finded = state.modals.map(item => item.id);
      let i = finded.lastIndexOf(action.payload);
      state.modals[i].status = false;
      state.modals.splice(i, 1);
    }
  },

  extraReducers(builder) {
    builder.addCase(getAllProducts.pending, (state, action) => {
      state.status = "loading";
    })
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.status = "successful";
        state.products = [...action.payload];
      })
      .addCase(getAllProducts.rejected, (state, action) => {
        state.status = "error";
        state.error = action.payload
      })
  }
})

export const products = store => store.products.products;
export const allModals = state => state.products.modals;

export const similarCate = (state, id, category) => {
  return () => state.filter(item => item.category === category)
    .filter(item => item.id !== id);
};

export const { addModal, closeModal } = productSlice.actions;
export default productSlice.reducer;