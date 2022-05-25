import { atom, RecoilBridge } from "recoil";

// file upload
export const fileUploadState = atom({
  key: "fileUpload",
  default: false,
});

// login state
export const loggedInState = atom({
  key: "loggedIn",
  default: false,
});

export const highlightState = atom({
  key: "highlight",
  default: "highlight-none",
});
