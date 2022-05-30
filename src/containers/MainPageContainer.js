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

  // click시 파일 다운로드 (현재 txt 파일로 통일)
  const DownloadFile = () => {
    if (window.confirm("선택한 파일을 다운로드 하시겠습니까?")) {
      // https://cors-anywhere.herokuapp.com/
      axios({
        url: "https://devleti.s3.ap-northeast-2.amazonaws.com/test.txt",
        method: "GET",
        responseType: "blob",
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      }).then((response) => {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "test.txt");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      });
    }
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
