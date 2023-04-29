import { createSlice } from "@reduxjs/toolkit";
import arrowDown from '../assets/icons/appearance-tab-icons/arrow-down.svg'

const initialState = {
    jumpItems: [
        { name: 'Shortcut', img: arrowDown },
        { name: 'username', img: arrowDown },
        { name: 'Short-username', img: arrowDown },
        { name: 'layout', img: arrowDown },
        { name: 'avatar-Title', img: arrowDown },
        { name: 'Placement-Manager', img: arrowDown },
        { name: 'Theme', img: arrowDown },
    ],
    openJump: false,
    openJumpName: 'Shortcut',
    openShortcut: true,
    openUsername: true,
    inputChange: false,
    newUsername: '',
    userNameUpdateSuccess: false,
};

export const appearanceSlice = createSlice({
    name: "appearanceSlice",
    initialState,
    reducers: {
        setOpenJump: (state, action) => {
            state.openJump = action.payload;
        },
        setOpenJumpName: (state, action) => {
            state.openJumpName = action.payload;
        },
        setOpenShortcut: (state, action) => {
            state.openShortcut = action.payload;
        },
        setOpenUsername: (state, action) => {
            state.openUsername = action.payload;
        },
        setInputChange: (state, action) => {
            state.inputChange = action.payload;
        },
        setNewUsername: (state, action) => {
            state.newUsername = action.payload;
        },
        setUserNameUpdateSuccess: (state, action) => {
            state.userNameUpdateSuccess = action.payload;
        },
    },
});

export const {
    setOpenJump,
    setOpenJumpName,
    setOpenShortcut,
    setOpenUsername,
    setInputChange,
    setNewUsername,
    setUserNameUpdateSuccess,
} = appearanceSlice.actions;
export default appearanceSlice.reducer;
