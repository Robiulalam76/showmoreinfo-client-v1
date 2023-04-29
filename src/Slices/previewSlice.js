import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    viewShareDrawer: '',
};

export const previewSlice = createSlice({
    name: "linkSlice",
    initialState,
    reducers: {
        setViewShareDrawer: (state, action) => {
            state.viewShareDrawer = action.payload;
        },
    },
});

export const {
    setViewShareDrawer
} = previewSlice.actions;
export default previewSlice.reducer;
