import React from "react";
import { IoMdClose } from "react-icons/io";
import "../styles/CreateDir.css";
import "../styles/ModalStyle.css";
import { Button } from "react-bootstrap";

const CreateDirComponent = (props) => {
  // 열기, 닫기를 부모로부터 받아옴
  const { open, close } = props;

  return (
    // 모달이 열릴때 openModal 클래스가 생성된다.
    <div className={open ? "open-modal modal" : "modal"}>
      {open ? (
        <div className="create-block">
          <div className="block-top">
            <div className="block-title">폴더 생성</div>
            <div className="close-modal" onClick={close}>
              <IoMdClose />
            </div>
          </div>
          <hr />
          <div className="create-section">
            <form>
              <input placeholder="폴더명" className="input-box"></input>
              <div className="create-button">
                <Button variant="primary">폴더생성</Button>
              </div>
            </form>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default CreateDirComponent;
