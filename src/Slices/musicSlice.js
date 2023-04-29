import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    musics: [
        {
            id: '1',
            name: 'Anghami',
            img: 'https://cdn-icons-png.flaticon.com/128/5968/5968764.png'
        },
        {
            id: '2',
            name: 'Qobuz',
            img: 'https://cdn-icons-png.flaticon.com/128/5968/5968764.png'
        },
        {
            id: '3',
            name: 'Apple Music',
            img: 'https://cdn-icons-png.flaticon.com/128/5968/5968764.png'
        },
        {
            id: '4',
            name: 'iTunes Store',
            img: 'https://cdn-icons-png.flaticon.com/128/5968/5968764.png'
        },
        {
            id: '5',
            name: 'KKBOX',
            img: 'https://cdn-icons-png.flaticon.com/128/5968/5968764.png'
        }
    ],
    errorUrl: '',
    search: '',
    newTitle: { id: '', title: '' },
    newURL: { id: '', link: '' },
    titleUpdateSuccess: { id: '' },
    urlUpdateSuccess: { id: '' },
};

export const musicSlice = createSlice({
    name: "musicSlice",
    initialState,
    reducers: {
        setErrorUrl: (state, action) => {
            state.errorUrl = action.payload;
        },
        setSearch: (state, action) => {
            state.search = action.payload;
        },
        setNewTitle: (state, action) => {
            state.newTitle = action.payload;
        },
        setNewURL: (state, action) => {
            state.newURL = action.payload;
        },
        setTitleUpdateSuccess: (state, action) => {
            state.titleUpdateSuccess = action.payload;
        },
        setUrlUpdateSuccess: (state, action) => {
            state.urlUpdateSuccess = action.payload;
        },
    },
});

export const {
    setErrorUrl,
    setSearch,
    setNewTitle,
    setNewURL,
    setTitleUpdateSuccess,
    setUrlUpdateSuccess,
} = musicSlice.actions;
export default musicSlice.reducer;
