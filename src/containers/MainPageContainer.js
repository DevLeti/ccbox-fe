import { React, useState } from "react";
import MainPageComponent from "../components/MainPageComponent";
import FileUploadComponent from "../components/FileUploadComponent";
import CreateDirComponent from "../components/CreateDirComponent";
import ShareFileComponent from "../components/ShareFileComponent";
import PreviewComponent from "../components/PreviewComponent";

const MainPageContainer = () => {
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

  return (
    <>
      <MainPageComponent
        openUpload={openUpload}
        openCreateDir={openCreateDir}
        openShareFile={openShareFile}
        openPreview={openPreview}
      />
      <FileUploadComponent open={uploadOpen} close={closeUpload} />
      <CreateDirComponent open={createDirOpen} close={closeCreateDir} />
      <ShareFileComponent open={shareFileOpen} close={closeShareFile} />
      <PreviewComponent open={previewOpen} close={closePreview} />
    </>
  );
};

export default MainPageContainer;
