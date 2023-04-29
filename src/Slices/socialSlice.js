import { createSlice } from "@reduxjs/toolkit";
import facebook from '../assets/icons/socials/facebook.png'
import twitter from '../assets/icons/socials/twitter.png'
import linkedin from '../assets/icons/socials/linkedin.png'
import youtube from '../assets/icons/socials/youtube.png'

const initialState = {
    socials: [
        {
            id: "1",
            name: "Facebook",
            url: "https://www.facebook.com/",
            img: facebook,
        },
        {
            id: "2",
            name: "Twitter",
            url: "https://www.twitter.com/",
            img: twitter,
        },
        {
            id: "3",
            name: "Linkedin",
            url: "https://www.linkedin.com/in/",
            img: linkedin,
        },
        {
            id: "4",
            name: "Youtube",
            url: "https://www.youtube.com/",
            img: youtube,
        },
    ],
    searchSocials: [],
    open: '',
    selectedSocial: 'Social Link',
    usernamePlacehoder: 'Paste Your Social Link here',
    socialImg: '',
    search: false,
    inputError: '',
    socialLinkName: { id: '', linkName: '' },
    socialLinkNameUpdateSuccess: { id: '' },
};

export const socialSlice = createSlice({
    name: "socialSlice",
    initialState,
    reducers: {
        setOpen: (state, action) => {
            state.open = action.payload;
        },
        setSearchSocials: (state, action) => {
            state.searchSocials = action.payload;
        },
        setSelectedSocial: (state, action) => {
            state.selectedSocial = action.payload;
        },
        setUsernamePlaceholder: (state, action) => {
            state.usernamePlacehoder = action.payload;
        },
        setSocialImg: (state, action) => {
            state.socialImg = action.payload;
        },
        setSearch: (state, action) => {
            state.search = action.payload;
        },
        setInputError: (state, action) => {
            state.inputError = action.payload;
        },
        setSocialLinkName: (state, action) => {
            state.socialLinkName = action.payload;
        },
        setSocialLinkNameUpdateSuccess: (state, action) => {
            state.socialLinkNameUpdateSuccess = action.payload;
        },

    },
});

export const {
    setOpen,
    setSearchSocials,
    setSelectedSocial,
    setUsernamePlaceholder,
    setSocialImg,
    setSearch,
    setInputError,
    setSocialLinkName,
    setSocialLinkNameUpdateSuccess
} = socialSlice.actions;
export default socialSlice.reducer;
