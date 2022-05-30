import { React, useState } from "react";
import { useRecoilValue, useRecoilState } from "recoil";
import { checkedFileState, fileListState } from "../recoil/atom";
import { IoMdClose } from "react-icons/io";
import "../styles/ShareFile.css";
import "../styles/ModalStyle.css";
import { Button } from "react-bootstrap";

const ShareFileComponent = ({ open, close }) => {
  const [name, setName] = useState("");
  const checkedFiles = useRecoilValue(checkedFileState);
  const [fileList, setFileList] = useRecoilState(fileListState);

  const changeShareUser = () => {
    let listCopy = [];
    fileList.map((file) => {
      if (checkedFiles.has(file.id)) {
        listCopy.push({
          id: file.id,
          filename: file.filename,
          filestyle: file.filestyle,
          upload: file.upload,
          access: "유명현 / " + name,
        });
      } else {
        listCopy.push(file);
      }
    });

    setFileList(listCopy);

    let timer = setTimeout(() => {
      if (window.confirm("공유 대상자가 수정되었습니다.")) {
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
            <div className="block-title">파일 공유</div>
            <div className="close-modal" onClick={close}>
              <IoMdClose />
            </div>
          </div>
          <hr />
          <div className="create-section">
            <form>
              <input
                placeholder="유저명"
                className="input-box"
                onChange={(e) => setName(e.target.value)}
              ></input>
              <div className="create-button">
                <Button variant="primary" onClick={changeShareUser}>
                  파일공유
                </Button>
              </div>
            </form>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default ShareFileComponent;
