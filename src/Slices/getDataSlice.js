import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getFetchData = createAsyncThunk("posts/getFetchData", async () => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
    console.log(res.data);
    return res.data
})

const initialState = {
    render: true,
    data: [],
    isLoading: false,
    error: null
};

export const getDataSlice = createSlice({
    name: "afd",
    initialState,
    reducers: {
        setRenderReducer: (state, action) => {
            state.render = action.payload.render;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getFetchData.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getFetchData.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
            state.error = null;
        });
        builder.addCase(getFetchData.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
        });
    }
});

export const { setRenderReducer } = getDataSlice.actions;
export default getDataSlice.reducer;
