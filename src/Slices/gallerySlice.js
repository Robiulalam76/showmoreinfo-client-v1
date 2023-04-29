import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    openAddGallery: false,
};

export const gallerySlice = createSlice({
    name: "gallerySlice",
    initialState,
    reducers: {
        setOpenAddGallery: (state, action) => {
            state.openAddGallery = action.payload;
        },
    },
});

export const {
    setOpenAddGallery,
} = gallerySlice.actions;
export default gallerySlice.reducer;
