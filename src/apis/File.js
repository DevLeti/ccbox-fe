import axios from "axios";

axios.defaults.baseURL = "http://localhost:8000";

/**
 * 파일 리스트를 불러옵니다.
 * @throws {number} non-200 HTTP status code
 * @returns {object} file list
 */
const getFileList = async () => {
  axios
    .get("/files")
    .then((res) => {
      console.log(res.data);
      return res.data;
    })
    .catch((err) => err.response.data);
};

/**
 * 파일을 업로드 합니다.
 * @param {string} folder - 업로드 하는 파일의 폴더 id
 * @param {string} path - 업로드 하는 파일의 절대경로입니다.
 * @param {string} fileName - 업로드 하는 파일의 이름입니다.
 * @param {number} isPublic - 업로드 하는 파일의 public 유무입니다. 0,1로 구분합니다.
 * @throws {number} non-200 HTTP status code
 * @returns {number} 200 HTTP status code
 * 현재 백엔드 api가 수정중이어서 이 코드도 변경되어야 합니다. formdata 관련 참고만 해주세요.
 */
const uploadFileList = async (folder, path, fileName, isPublic) => {
  let formData = new FormData();
  formData.append("Folder", folder); //formdata
  formData.append("path", path);
  formData.append("file_name", fileName);
  formData.append("IsPublic", isPublic);
  axios
    .post("/files", formData)
    .then((res) => res.status)
    .catch((err) => err.response.status);
};

export { getFileList, uploadFileList };
