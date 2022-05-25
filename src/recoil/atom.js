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
