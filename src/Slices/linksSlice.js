import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  errorUrl: '',
  showError: false,
  openEffcetsModal: '',
  fastLinkProModal: '',
  openSchedule: '',
  startDateCalander: '',
  endDateCalander: '',
  openInputChange1: '',
  openInputChange2: '',
  linkNameUpdateSuccess: { id: '' },
  linkURLUpdateSuccess: { id: '' },
  linkName: { id: '', linkName: '' },
  linkURL: { id: '', linkURL: '' },
  imageData: null,
};

export const linksSlice = createSlice({
  name: "linkSlice",
  initialState,
  reducers: {
    setErrorUrl: (state, action) => {
      state.errorUrl = action.payload;
    },
    setShowError: (state, action) => {
      state.showError = action.payload;
    },
    setOpenEffcetsModal: (state, action) => {
      state.openEffcetsModal = action.payload;
    },
    setFastLinkProModal: (state, action) => {
      state.fastLinkProModal = action.payload;
    },
    setOpenSchedule: (state, action) => {
      state.openSchedule = action.payload;
    },

    // calander data
    setStartDateCalander: (state, action) => {
      state.startDateCalander = action.payload;
    },
    setEndDateCalander: (state, action) => {
      state.endDateCalander = action.payload;
    },
    setOpenInputChange1: (state, action) => {
      state.openInputChange1 = action.payload;
    },
    setOpenInputChange2: (state, action) => {
      state.openInputChange2 = action.payload;
    },
    setLinkName: (state, action) => {
      state.linkName = action.payload;
    },
    setLinkURL: (state, action) => {
      state.linkURL = action.payload;
    },
    setImageData: (state, action) => {
      state.imageData = action.payload;
    },
    setLinkURLUpdateSuccess: (state, action) => {
      state.linkURLUpdateSuccess = action.payload;
    },
    setLinkNameUpdateSuccess: (state, action) => {
      state.linkNameUpdateSuccess = action.payload;
    },

  },
});

export const {
  setErrorUrl,
  setShowError,
  setOpenEffcetsModal,
  handleDefaultSwitch,
  setFastLinkProModal,
  setOpenSchedule,
  setStartDateCalander,
  setEndDateCalander,
  setOpenInputChange1,
  setOpenInputChange2,
  setLinkName,
  setLinkURL,
  setImageData,
  setLinkNameUpdateSuccess,
  setLinkURLUpdateSuccess,

} = linksSlice.actions;
export default linksSlice.reducer;
