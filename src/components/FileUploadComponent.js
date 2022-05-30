import { React } from "react";
import { fileListState } from "../recoil/atom";
import { useRecoilState } from "recoil";
import { IoMdClose } from "react-icons/io";
import "../styles/FileUpload.css";
import "../styles/ModalStyle.css";
import uploadIcon from "../assets/image/file_upload.png";

const timestamp = () => {
  const today = new Date();
  today.setHours(today.getHours() + 9);
  return today.toISOString().replace("T", " ").substring(0, 19);
};

const FileUploadComponent = (props) => {
  // 열기, 닫기를 부모로부터 받아옴
  const { open, close } = props;
  const [fileList, setFileList] = useRecoilState(fileListState);

  const handleChangeFile = (e) => {
    e.preventDefault();
    const filename = e.target.files[0].name;
    const upload = timestamp();
    const extension = e.target.files[0].name.split(".")[1];

    let filestyle = "";
    if (extension === "png" || extension === "jpeg" || extension === "jpg") {
      filestyle = "img";
    } else if (extension === "mp4" || extension === "avi") {
      filestyle = "video";
    } else if (extension === "pptx") {
      filestyle = "ppt";
    } else if (extension === "docx" || extension === "txt") {
      filestyle = "doc";
    } else {
      filestyle = "xlsx";
    }

    const uploadFile = {
      id: 6,
      filename: filename,
      filestyle: filestyle,
      upload: upload,
      access: "본인만",
    };

    let timer = setTimeout(() => {
      if (window.confirm("파일이 정상적으로 업로드되었습니다.")) {
        setFileList([...fileList, uploadFile]);
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
