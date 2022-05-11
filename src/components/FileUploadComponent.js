import React from 'react';
import { IoMdClose } from "react-icons/io";
import '../styles/FileUpload.css';
import uploadIcon from '../assets/image/file_upload.png';

const FileUploadComponent = ( props ) => {
  // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
  const { open, close, header } = props;

  return (
    // 모달이 열릴때 openModal 클래스가 생성된다.
    <div className={open ? 'open-modal upload-modal' : 'upload-modal'}>
      {open ? (
        <div className='upload-block'>
            <div className='block-top'>
                <div className='block-title'>파일 업로드</div>
                <div className='close-modal' onClick={close}><IoMdClose /></div>
            </div>
            <hr />
            <div className='upload-section'>
                <div><img src={uploadIcon} alt="upload-icon" className="icon-image"/></div>
                <div className='upload-comment'>드래그&드롭<br/>또는<br/>클릭하여 파일 선택</div>
            </div>
        </div>
      ) : null}
    </div>
  );
};

export default FileUploadComponent;