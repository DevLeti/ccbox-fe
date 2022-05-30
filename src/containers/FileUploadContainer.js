import { React, useState } from "react";
import FileUploadComponent from "../components/FileUploadComponent";

const FileUploadContainer = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const closeModal = () => {
    setModalOpen(false);
  };

  return <FileUploadComponent open={modalOpen} close={closeModal} />;
};

export default FileUploadContainer;
