import {React, useState } from 'react';
import CreateDirComponent from '../components/CreateDirComponent';

const CreateDirContainer = () => {
    const [modalOpen, setModalOpen] = useState(false);

    const closeModal = () => {
        setModalOpen(false);
    };

    return <CreateDirComponent open={modalOpen} close={closeModal} />
};

export default CreateDirContainer;