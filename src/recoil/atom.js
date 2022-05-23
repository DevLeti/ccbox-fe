import { atom } from "recoil";

// file upload
export const fileUploadState = atom({
  key: "fileUpload",
  default: false,
});

export const loggedInState = atom({
  key: "loggedIn",
  default: false,
});
