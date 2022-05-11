import {React, useState} from 'react';
import MainPageComponent from '../components/MainPageComponent';
import FileUploadComponent from '../components/FileUploadComponent';
import CreateDirComponent from '../components/CreateDirComponent';

const MainPageContainer = () => {
    const [uploadOpen, setUploadOpen] = useState(false);
    const [createDirOpne, setCreateDirOpen] = useState(false);

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

    return (
        <>
            <MainPageComponent openUpload={openUpload} openCreateDir={openCreateDir} />
            <FileUploadComponent open={uploadOpen} close={closeUpload}/>
            <CreateDirComponent open={createDirOpne} close={closeCreateDir}/>
        </>
    );
};

export default MainPageContainer;