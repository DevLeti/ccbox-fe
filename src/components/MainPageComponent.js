import { React, useState } from "react";
import { BsFillCircleFill } from "react-icons/bs";
import { ImArrowUp } from "react-icons/im";
import { BiTrashAlt } from "react-icons/bi";
import { Button, Table } from "react-bootstrap";
import { fileListState, highlightState } from "../recoil/atom";
import { useRecoilValue } from "recoil";
import "../styles/MainPage.css";
import DocLogo from "../assets/image/doc_logo.png";
import ExcelLogo from "../assets/image/excel_logo.png";
import ImgLogo from "../assets/image/image_logo.png";
import PptLogo from "../assets/image/presentation_logo.png";
import VideoLogo from "../assets/image/video_logo.png";
import Sidebar from "../pages/common/Sidebar";

const CheckFileComponent = ({ filename, fileId, checkedItemHandler }) => {
  const [bChecked, setChecked] = useState(false);
  const checkHandler = (item, checked) => {
    setChecked(!bChecked);
    checkedItemHandler(item, checked);
  };

  return (
    <input
      type="checkbox"
      name={filename}
      value={fileId}
      className="file-check mg-right"
      onChange={(e) => checkHandler(fileId, e.target.checked)}
    />
  );
};

const FileListComponent = ({ openPreview, checkedItemHandler }) => {
  const files = useRecoilValue(fileListState);

  return (
    <Table responsive="md">
      <thead>
        <tr>
          <th>파일명</th>
          <th>업로드 / 마지막 수정</th>
          <th>액세스 가능 유저</th>
        </tr>
      </thead>
      <tbody>
        {files.map((file, index) => (
          <tr key={index}>
            <td className="file-name">
              <CheckFileComponent
                filename={file.filename}
                fileId={file.id}
                checkedItemHandler={checkedItemHandler}
              />
              <div onClick={openPreview} className="point-cursor">
                <span className="file-logo mg-right">
                  {file.filestyle === "img" ? (
                    <img src={ImgLogo} alt="img-logo" className="logo-image" />
                  ) : file.filestyle === "video" ? (
                    <img
                      src={VideoLogo}
                      alt="img-logo"
                      className="logo-image"
                    />
                  ) : file.filestyle === "ppt" ? (
                    <img src={PptLogo} alt="img-logo" className="logo-image" />
                  ) : file.filestyle === "doc" ? (
                    <img src={DocLogo} alt="img-logo" className="logo-image" />
                  ) : (
                    <img
                      src={ExcelLogo}
                      alt="img-logo"
                      className="logo-image"
                    />
                  )}
                </span>
                <span>{file.filename}</span>
              </div>
            </td>
            <td>{file.upload}</td>
            <td>{file.access}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

const MainPageComponent = ({
  openUpload,
  openCreateDir,
  openShareFile,
  openPreview,
  clickHighRed,
  clickHighBlue,
  clickHighGreen,
  clickHighYellow,
  clickHighNone,
  checkedItemHandler,
  DownloadFile,
  DeleteFile,
}) => {
  const highlightValue = useRecoilValue(highlightState);

  return (
    <div className="main-layout fade-in-box">
      <Sidebar />
      <div className="main-block">
        <div className="path-block">
          <span className="directory-list">
            <span className={"directory-path dir-current " + highlightValue}>
              Root
            </span>
          </span>
          <div className="highlight-block">
            <button className="btn-styles" onClick={clickHighRed}>
              <span className="high-red">
                <BsFillCircleFill size="18" />
              </span>
            </button>
            <button className="btn-styles" onClick={clickHighBlue}>
              <span className="high-blue">
                <BsFillCircleFill size="18" />
              </span>
            </button>
            <button className="btn-styles" onClick={clickHighGreen}>
              <span className="high-green">
                <BsFillCircleFill size="18" />
              </span>
            </button>
            <button className="btn-styles" onClick={clickHighYellow}>
              <span className="high-yellow">
                <BsFillCircleFill size="18" />
              </span>
            </button>
            <button className="btn-styles" onClick={clickHighNone}>
              <span className="high-white">
                <BsFillCircleFill size="18" />
              </span>
            </button>
          </div>
        </div>
        <div className="buttons-block">
          <Button
            variant="primary"
            className="button-align"
            onClick={openUpload}
          >
            업로드 <ImArrowUp className="icon-margin" />
          </Button>
          <Button variant="light" onClick={openCreateDir}>
            폴더생성
          </Button>
          <span className="border-line">|</span>
          <Button variant="light" onClick={DownloadFile}>
            다운로드
          </Button>
          <Button variant="light" onClick={openShareFile}>
            파일공유
          </Button>
          <Button variant="light" className="button-align" onClick={DeleteFile}>
            삭제 <BiTrashAlt className="icon-margin" />
          </Button>
        </div>
        <div className="filelist-block">
          <FileListComponent
            openPreview={openPreview}
            checkedItemHandler={checkedItemHandler}
          />
        </div>
      </div>
    </div>
  );
};

export default MainPageComponent;
