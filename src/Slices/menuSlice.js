import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currencyItems: ['USD', 'UYU', 'UZS', 'VEF', 'VES', 'VND', 'ZWL', 'ZMW', 'ZMK', 'ZAR', 'YER', 'XPF', 'XOF', 'XCD'],
    viewCurrency: false,
    proModal1: false,
    proModal2: false,
    menuName: '',
    menuNameUpdateSuccess: '',
};

export const menuSlice = createSlice({
    name: "menuSlice",
    initialState,
    reducers: {
        setViewCurrency: (state, action) => {
            state.viewCurrency = action.payload;
        },
        setProModal1: (state, action) => {
            state.proModal1 = action.payload;
        },
        setProModal2: (state, action) => {
            state.proModal2 = action.payload;
        },
        setMenuName: (state, action) => {
            state.menuName = action.payload;
        },
        setMenuNameUpdateSuccess: (state, action) => {
            state.menuNameUpdateSuccess = action.payload;
        },
    },
});

export const {
    setViewCurrency,
    setProModal1,
    setProModal2,
    setMenuName,
    setMenuNameUpdateSuccess
} = menuSlice.actions;
export default menuSlice.reducer;
