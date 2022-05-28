import { React, useState, useRef } from "react";
import { highlightState } from "../recoil/atom";
import { useRecoilState } from "recoil";
import MainPageComponent from "../components/MainPageComponent";
import FileUploadComponent from "../components/FileUploadComponent";
import CreateDirComponent from "../components/CreateDirComponent";
import ShareFileComponent from "../components/ShareFileComponent";
import PreviewComponent from "../components/PreviewComponent";

const MainPageContainer = () => {
  // modal open, close
  const [uploadOpen, setUploadOpen] = useState(false);
  const [createDirOpen, setCreateDirOpen] = useState(false);
  const [shareFileOpen, setShareFileOpen] = useState(false);
  const [previewOpen, setPreviewOpen] = useState(false);

  const openUpload = () => {
    setUploadOpen(true);
  };
  const closeUpload = () => {
    setUploadOpen(false);
  };

  const openCreateDir = () => {
    setCreateDirOpen(true);
  };
  const closeCreateDir = () => {
    setCreateDirOpen(false);
  };

  const openShareFile = () => {
    setShareFileOpen(true);
  };
  const closeShareFile = () => {
    setShareFileOpen(false);
  };

  const openPreview = () => {
    setPreviewOpen(true);
  };
  const closePreview = () => {
    setPreviewOpen(false);
  };

  // folder highlight
  const [highlight, setHighlight] = useRecoilState(highlightState);

  const clickHighRed = () => {
    setHighlight("highlight-red");
  };

  const clickHighBlue = () => {
    setHighlight("highlight-blue");
  };

  const clickHighGreen = () => {
    setHighlight("highlight-green");
  };

  const clickHighYellow = () => {
    setHighlight("highlight-yellow");
  };

  const clickHighNone = () => {
    setHighlight("highlight-none");
  };

  // file list
  const files = [
    {
      id: 1,
      filename: "logo.png",
      filestyle: "img",
      upload: "2022-03-28 12:10",
      access: "본인만",
    },
    {
      id: 2,
      filename: "lecture1.mp4",
      filestyle: "video",
      upload: "2022-03-28 12:32",
      access: "본인만",
    },
    {
      id: 3,
      filename: "mid-term.ppt",
      filestyle: "ppt",
      upload: "2022-04-10 16:05",
      access: "본인만",
    },
    {
      id: 4,
      filename: "spec.docx",
      filestyle: "doc",
      upload: "2022-04-13 11:03",
      access: "본인만",
    },
    {
      id: 5,
      filename: "액셀연습.xlsx",
      filestyle: "excel",
      upload: "2022-04-22 18:17",
      access: "본인만",
    },
  ];

  return (
    <>
      <MainPageComponent
        openUpload={openUpload}
        openCreateDir={openCreateDir}
        openShareFile={openShareFile}
        openPreview={openPreview}
        clickHighRed={clickHighRed}
        clickHighBlue={clickHighBlue}
        clickHighGreen={clickHighGreen}
        clickHighYellow={clickHighYellow}
        clickHighNone={clickHighNone}
        files={files}
      />
      <FileUploadComponent open={uploadOpen} close={closeUpload} />
      <CreateDirComponent open={createDirOpen} close={closeCreateDir} />
      <ShareFileComponent open={shareFileOpen} close={closeShareFile} />
      <PreviewComponent open={previewOpen} close={closePreview} />
    </>
  );
};

export default MainPageContainer;
