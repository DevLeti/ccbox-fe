import React from "react";
import { IoMdClose } from "react-icons/io";
import "../styles/Preview.css";
import "../styles/ModalStyle.css";
import ReactPlayer from "react-player";

const PreviewComponent = (props) => {
  // 열기, 닫기를 부모로부터 받아옴
  const { open, close } = props;

  return (
    // 모달이 열릴때 openModal 클래스가 생성된다.
    <div className={open ? "open-modal modal" : "modal"}>
      {open ? (
        <div className="create-block">
          <div className="block-top">
            <div className="block-title">미리보기</div>
            <div className="close-modal" onClick={close}>
              <IoMdClose />
            </div>
          </div>
          <hr />
          <div className="create-section">
            {/* TODO: url 관리 방식 - props? recoil?*/}
            <ReactPlayer
              className="player"
              url="https://d2bg6z9x0yg9ip.cloudfront.net/file_example_MP4_640_3MG.mp4"
              width="100%"
              height="100%"
              controls={true}
            />
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default PreviewComponent;
