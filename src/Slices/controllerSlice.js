import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    open: '',
    deleteModal: '',
    openInputChange1: '',
    openInputChange2: '',
    openInputChange3: '',
    uploadImageModal: '',
    openFastLinkModal: '',
    openProModal: '',
    openTab: false,
    successfull: false,
};

export const controllerSlice = createSlice({
    name: "controllerSlice",
    initialState,
    reducers: {
        setOpen: (state, action) => {
            state.open = action.payload;
        },
        setDeleteModal: (state, action) => {
            state.deleteModal = action.payload;
        },
        setOpenInputChange1: (state, action) => {
            state.openInputChange1 = action.payload;
        },
        setOpenInputChange2: (state, action) => {
            state.openInputChange2 = action.payload;
        },
        setOpenInputChange3: (state, action) => {
            state.openInputChange3 = action.payload;
        },
        setUploadImageModal: (state, action) => {
            state.uploadImageModal = action.payload;
        },
        setOpenFastLinkModal: (state, action) => {
            state.openFastLinkModal = action.payload;
        },
        setOpenProModal: (state, action) => {
            state.openProModal = action.payload;
        },
        setOpenTab: (state, action) => {
            state.openTab = action.payload;
        },
        setSuccessfull: (state, action) => {
            state.successfull = action.payload;
        },
    },
});

export const {
    setOpen,
    setDeleteModal,
    setOpenInputChange1,
    setOpenInputChange2,
    setOpenInputChange3,
    setUploadImageModal,
    setOpenFastLinkModal,
    setOpenProModal,
    setOpenTab,
    setSuccessfull
} = controllerSlice.actions;
export default controllerSlice.reducer;
