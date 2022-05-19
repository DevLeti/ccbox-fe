import { React, useState } from "react";
import PreviewComponent from "../components/PreviewComponent";

const PreviewContainer = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const closeModal = () => {
    setModalOpen(false);
  };

  return <PreviewComponent open={modalOpen} close={closeModal} />;
};

export default PreviewContainer;
