import {React, useState} from 'react';
import MainPageComponent from '../components/MainPageComponent';
import FileUploadComponent from '../components/FileUploadComponent';

const MainPageContainer = () => {
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };
    const closeModal = () => {
        setModalOpen(false);
    };

    return (<><MainPageComponent openModal={openModal}/><FileUploadComponent open={modalOpen} close={closeModal}/></>)
};

export default MainPageContainer;