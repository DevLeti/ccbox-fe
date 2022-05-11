import {React, useState } from 'react';
import FileUploadComponent from '../components/FileUploadComponent';

const FileUploadContainer = () => {
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };
    const closeModal = () => {
        setModalOpen(false);
    };

    return <FileUploadComponent open={modalOpen} close={closeModal} header="Modal heading" />
};

export default FileUploadContainer;