import React from "react";
import { IoMdClose } from "react-icons/io";
import "../styles/ShareFile.css";
import "../styles/ModalStyle.css";
import { Button } from "react-bootstrap";

const ShareFileComponent = (props) => {
  // 열기, 닫기를 부모로부터 받아옴
  const { open, close } = props;

  return (
    // 모달이 열릴때 openModal 클래스가 생성된다.
    <div className={open ? "open-modal modal" : "modal"}>
      {open ? (
        <div className="create-block">
          <div className="block-top">
            <div className="block-title">파일 공유</div>
            <div className="close-modal" onClick={close}>
              <IoMdClose />
            </div>
          </div>
          <hr />
          <div className="create-section">
            <form>
              <input placeholder="유저명" className="input-box"></input>
              {/* <div className="share-user-list">공유 유저 리스트</div> */}
              <div className="create-button">
                <Button variant="primary">파일공유</Button>
              </div>
            </form>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default ShareFileComponent;
