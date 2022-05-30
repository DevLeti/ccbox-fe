import { React, useState } from "react";
import { highlightState, checkedFileState } from "../recoil/atom";
import { useRecoilState } from "recoil";
import axios from "axios";
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

  // check된 항목 관리
  const [checkedItems, setCheckedItems] = useRecoilState(checkedFileState);

  const checkedItemHandler = (id, isChecked) => {
    if (isChecked) {
      checkedItems.add(id);
      setCheckedItems(checkedItems);
    } else if (!isChecked && checkedItems.has(id)) {
      checkedItems.delete(id);
      setCheckedItems(checkedItems);
    }
    console.log(checkedItems);
  };

  // click시 파일 다운로드 (현재 mp4 파일로 통일)
  const DownloadFile = () => {
    axios({
      url: "https://d2bg6z9x0yg9ip.cloudfront.net/file_example_MP4_640_3MG.mp4",
      method: "GET",
      responseType: "blob",
    }).then((response) => {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "lecture1.mp4");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  };

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
        checkedItemHandler={checkedItemHandler}
        DownloadFile={DownloadFile}
      />
      <FileUploadComponent open={uploadOpen} close={closeUpload} />
      <CreateDirComponent open={createDirOpen} close={closeCreateDir} />
      <ShareFileComponent open={shareFileOpen} close={closeShareFile} />
      <PreviewComponent open={previewOpen} close={closePreview} />
    </>
  );
};

export default MainPageContainer;
