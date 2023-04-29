import { createSlice } from "@reduxjs/toolkit";

import img1 from '../assets/icons/country-icons/img (4).svg'
import img2 from '../assets/icons/country-icons/img (1).svg'

const initialState = {
    languages: [
        { id: '1', img: img1, name: 'English' },
        { id: '2', img: img2, name: 'Arabic' },
    ],
    selectedLanguage: { id: '1', img: img1, name: 'English' },
    showLanguage: false,
};

export const navberSlice = createSlice({
    name: "navberSlice",
    initialState,
    reducers: {
        setShowLanguage: (state, action) => {
            state.showLanguage = action.payload;
        },
        setSelectedLanguage: (state, action) => {
            state.showLanguage = false;
            state.selectedLanguage = action.payload;
        },
    },
});

export const {
    setSelectedLanguage,
    setShowLanguage,
} = navberSlice.actions;
export default navberSlice.reducer;
