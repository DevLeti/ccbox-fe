import { React, useState } from "react";
import MainPageComponent from "../components/MainPageComponent";
import FileUploadComponent from "../components/FileUploadComponent";
import CreateDirComponent from "../components/CreateDirComponent";
import ShareFileComponent from "../components/ShareFileComponent";

const MainPageContainer = () => {
  const [uploadOpen, setUploadOpen] = useState(false);
  const [createDirOpne, setCreateDirOpen] = useState(false);
  const [shareFileOpen, setShareFileOpen] = useState(false);

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

  return (
    <>
      <MainPageComponent
        openUpload={openUpload}
        openCreateDir={openCreateDir}
        openShareFile={openShareFile}
      />
      <FileUploadComponent open={uploadOpen} close={closeUpload} />
      <CreateDirComponent open={createDirOpne} close={closeCreateDir} />
      <ShareFileComponent open={shareFileOpen} close={closeShareFile} />
    </>
  );
};

export default MainPageContainer;
