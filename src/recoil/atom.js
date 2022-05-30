import { atom } from "recoil";

// login state
export const loggedInState = atom({
  key: "loggedIn",
  default: false,
});

// highlight state
export const highlightState = atom({
  key: "highlight",
  default: "highlight-none",
});

// filelist state
export const fileListState = atom({
  key: "filelist",
  default: [
    {
      id: 1,
      filename: "logo.png",
      filestyle: "img",
      upload: "2022-03-28 12:10:41",
      access: "본인만",
    },
    {
      id: 2,
      filename: "lecture1.mp4",
      filestyle: "video",
      upload: "2022-03-28 12:32:17",
      access: "본인만",
    },
    {
      id: 3,
      filename: "mid-term.ppt",
      filestyle: "ppt",
      upload: "2022-04-10 16:05:32",
      access: "본인만",
    },
    {
      id: 4,
      filename: "spec.docx",
      filestyle: "doc",
      upload: "2022-04-13 11:03:19",
      access: "본인만",
    },
    {
      id: 5,
      filename: "액셀연습.xlsx",
      filestyle: "excel",
      upload: "2022-04-22 18:17:21",
      access: "본인만",
    },
  ],
});

// folder list state
export const folderListState = atom({
  key: "folderlist",
  default: [{ id: 1, foldername: "Root" }],
});

// checked file id state
export const checkedFileState = atom({
  key: "checkedfile",
  default: new Set(),
});
