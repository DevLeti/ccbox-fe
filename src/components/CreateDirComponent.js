import { React, useState } from "react";
import { folderListState } from "../recoil/atom";
import { useRecoilState } from "recoil";
import { IoMdClose } from "react-icons/io";
import "../styles/CreateDir.css";
import "../styles/ModalStyle.css";
import { Button } from "react-bootstrap";

const CreateDirComponent = (props) => {
  // 열기, 닫기를 부모로부터 받아옴
  const { open, close } = props;
  const [dir, setDir] = useState("");
  const [folderList, setFolderList] = useRecoilState(folderListState);

  const handleAddDir = () => {
    const folder = {
      id: 2,
      foldername: dir,
    };

    let timer = setTimeout(() => {
      if (window.confirm("폴더가 정상적으로 추가되었습니다.")) {
        setFolderList([...folderList, folder]);
        close();
      }
    }, 1000);
  };

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
              <input
                placeholder="폴더명"
                className="input-box"
                onChange={(e) => setDir(e.target.value)}
              ></input>
              <div className="create-button">
                <Button variant="primary" onClick={handleAddDir}>
                  폴더생성
                </Button>
              </div>
            </form>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default CreateDirComponent;
