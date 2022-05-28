import { React, useState, useRef, useCallback } from "react";
import { IoMdClose } from "react-icons/io";
import "../styles/FileUpload.css";
import "../styles/ModalStyle.css";
import uploadIcon from "../assets/image/file_upload.png";

const FileUploadComponent = (props) => {
  // 열기, 닫기를 부모로부터 받아옴
  const { open, close } = props;

  const handleChangeFile = (e) => {
    e.preventDefault();
    console.log(e.target.files[0]);
    let timer = setTimeout(() => {
      if (window.confirm("파일이 정상적으로 업로드되었습니다.")) {
        close();
      }
    }, 1000);
  };

  return (
    // 모달이 열릴때 openModal 클래스가 생성된다.
    <div className={open ? "open-modal modal" : "modal"}>
      {open ? (
        <div className="upload-block">
          <div className="block-top">
            <div className="block-title">파일 업로드</div>
            <div className="close-modal" onClick={close}>
              <IoMdClose />
            </div>
          </div>
          <hr />
          <input
            type="file"
            id="fileUpload"
            multiple
            className="input-none"
            onChange={(e) => handleChangeFile(e)}
          />
          <label className="upload-section stop-dragging" htmlFor="fileUpload">
            <div>
              <img src={uploadIcon} alt="upload-icon" className="icon-image" />
            </div>
            <div className="upload-comment">
              드래그&드롭
              <br />
              또는
              <br />
              클릭하여 파일 선택
            </div>
          </label>
        </div>
      ) : null}
    </div>
  );
};

export default FileUploadComponent;
