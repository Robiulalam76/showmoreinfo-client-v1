import { combineReducers } from "@reduxjs/toolkit";
import appearanceSlice from "../Slices/appearanceSlice";
import controllerSlice from "../Slices/controllerSlice";
import gallerySlice from "../Slices/gallerySlice";
import getDataReducer from "../Slices/getDataSlice";
import linksSlice from "../Slices/linksSlice";
import locationSlice from "../Slices/locationSlice";
import menuSlice from "../Slices/menuSlice";
import messageSlice from "../Slices/messageSlice";
import musicSlice from "../Slices/musicSlice";
import navberSlice from "../Slices/navberSlice";
import previewSlice from "../Slices/previewSlice";
import socialSlice from "../Slices/socialSlice";

const rootReducer = combineReducers({
  getData: getDataReducer,
  controllerSlice: controllerSlice,
  navberSlice: navberSlice,

  linksSlice: linksSlice,
  socialSlice: socialSlice,
  gallerySlice: gallerySlice,
  menuSlice: menuSlice,
  locationSlice: locationSlice,
  musicSlice: musicSlice,

  appearanceSlice: appearanceSlice,
  messageSlice: messageSlice,

  previewSlice: previewSlice,
});

export default rootReducer;
