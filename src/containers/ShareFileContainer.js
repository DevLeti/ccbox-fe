import { React, useState } from "react";
import ShareFileComponent from "../components/ShareFileComponent";

const ShareFileContainer = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const closeModal = () => {
    setModalOpen(false);
  };

  return <ShareFileComponent open={modalOpen} close={closeModal} />;
};

export default ShareFileContainer;
