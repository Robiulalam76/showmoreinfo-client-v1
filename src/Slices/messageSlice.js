import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    messageText: '',
    successMessageText: '',
    namePlaceholderText: '',
    emailPlaceholderText: '',
    phoneNumberPlaceholderText: '',
    allMessages: [],
    messageTextUpdateSuccess: false,
    successMessageTextUpdateSuccess: false,
    namePlaceholderUpdateSuccess: false,
    emailPlaceholderUpdateSuccess: false,
    phoneNumberPlaceholderUpdateSuccess: false,
};

export const messageSlice = createSlice({
    name: "messageSlice",
    initialState,
    reducers: {
        setMessageText: (state, action) => {
            state.messageText = action.payload;
        },
        setSuccessMessageText: (state, action) => {
            state.successMessageText = action.payload;
        },
        setNamePlaceholderText: (state, action) => {
            state.namePlaceholderText = action.payload;
        },
        setEmailPlaceholderText: (state, action) => {
            state.emailPlaceholderText = action.payload;
        },
        setPhoneNumberPlaceholderText: (state, action) => {
            state.phoneNumberPlaceholderText = action.payload;
        },
        setAllMessages: (state, action) => {
            state.allMessages = action.payload;
        },
        setMessageTextUpdateSuccess: (state, action) => {
            state.messageTextUpdateSuccess = action.payload;
        },
        setSuccessMessageTextUpdateSuccess: (state, action) => {
            state.successMessageTextUpdateSuccess = action.payload;
        },
        setNamePlaceholderUpdateSuccess: (state, action) => {
            state.namePlaceholderUpdateSuccess = action.payload;
        },
        setEmailPlaceholderUpdateSuccess: (state, action) => {
            state.emailPlaceholderUpdateSuccess = action.payload;
        },
        setPhoneNumberPlaceholderUpdateSuccess: (state, action) => {
            state.phoneNumberPlaceholderUpdateSuccess = action.payload;
        },
    },
});

export const {
    setMessageText,
    setSuccessMessageText,
    setNamePlaceholderText,
    setEmailPlaceholderText,
    setPhoneNumberPlaceholderText,
    setAllMessages,
    setMessageTextUpdateSuccess,
    setSuccessMessageTextUpdateSuccess,
    setNamePlaceholderUpdateSuccess,
    setEmailPlaceholderUpdateSuccess,
    setPhoneNumberPlaceholderUpdateSuccess,
} = messageSlice.actions;
export default messageSlice.reducer;
