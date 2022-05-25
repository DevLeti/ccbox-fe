import { useEffect, useState, React } from "react";
import { BsFillCircleFill } from "react-icons/bs";
import { ImArrowUp } from "react-icons/im";
import { BiTrashAlt } from "react-icons/bi";
import { Button, Table } from "react-bootstrap";
import { highlightState } from "../recoil/atom";
import { useRecoilValue } from "recoil";
import "../styles/MainPage.css";
import DocLogo from "../assets/image/doc_logo.png";
import ExcelLogo from "../assets/image/excel_logo.png";
import ImgLogo from "../assets/image/image_logo.png";
import PptLogo from "../assets/image/presentation_logo.png";
import VideoLogo from "../assets/image/video_logo.png";
import Sidebar from "../common/Sidebar/Sidebar";

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
          <Button variant="light" onClick={openShareFile}>
            파일공유
          </Button>
          <Button variant="light" className="button-align">
            삭제 <BiTrashAlt className="icon-margin" />
          </Button>
        </div>
        <div className="filelist-block">
          <Table responsive="md">
            <thead>
              <tr>
                <th>파일명</th>
                <th>업로드 / 마지막 수정</th>
                <th>액세스 가능 유저</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="file-name">
                  <input
                    type="checkbox"
                    name="xxx"
                    value="yyy"
                    className="file-check mg-right"
                  />
                  <span className="file-logo mg-right">
                    <img src={ImgLogo} alt="img-logo" className="logo-image" />
                  </span>
                  logo.png
                </td>
                <td>2022-03-28 12:10</td>
                <td>본인만</td>
              </tr>
              <tr>
                <td className="file-name">
                  <input
                    type="checkbox"
                    name="xxx"
                    value="yyy"
                    className="file-check mg-right"
                  />
                  <span className="file-logo mg-right" onClick={openPreview}>
                    <img
                      src={VideoLogo}
                      alt="img-logo"
                      className="logo-image"
                    />
                  </span>
                  lecture1.mp4
                </td>
                <td>2022-03-28 12:10</td>
                <td>유명현, 김지수</td>
              </tr>
              <tr>
                <td className="file-name">
                  <input
                    type="checkbox"
                    name="xxx"
                    value="yyy"
                    className="file-check mg-right"
                  />
                  <span className="file-logo mg-right">
                    <img src={PptLogo} alt="img-logo" className="logo-image" />
                  </span>
                  mid-term.ppt
                </td>
                <td>2022-03-28 12:10</td>
                <td>유명현 외 5명</td>
              </tr>
              <tr>
                <td className="file-name">
                  <input
                    type="checkbox"
                    name="xxx"
                    value="yyy"
                    className="file-check mg-right"
                  />
                  <span className="file-logo mg-right">
                    <img src={DocLogo} alt="img-logo" className="logo-image" />
                  </span>
                  spec.docx
                </td>
                <td>2022-03-28 12:10</td>
                <td>유명현 외 5명</td>
              </tr>
              <tr>
                <td className="file-name">
                  <input
                    type="checkbox"
                    name="xxx"
                    value="yyy"
                    className="file-check mg-right"
                  />
                  <span className="file-logo mg-right">
                    <img
                      src={ExcelLogo}
                      alt="img-logo"
                      className="logo-image"
                    />
                  </span>
                  액셀연습.xlsx
                </td>
                <td>2022-03-28 12:10</td>
                <td>유명현 외 5명</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default MainPageComponent;
