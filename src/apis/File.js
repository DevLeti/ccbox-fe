import axios from "axios";

axios.defaults.baseURL = "http://localhost:8000";
axios.defaults.headers.common["Authorization"] = localStorage["JWT"]; // header Authorization 기본 설정

/**
 * 파일 리스트를 불러옵니다.
 * @throws {number} non-200 HTTP status code
 * @returns {object} file list
 */
const getFileList = async () => {
  axios
    .get("/file/")
    .then((res) => {
      console.log(res.data);
      return res.data;
    })
    .catch((err) => err.response.data);
};

/**
 * 파일을 업로드 합니다.
 * @param {string} folder - 업로드 하는 파일의 폴더 이름
 * @param {file} file - 업로드 하는 파일 데이터입니다.
 * @param {string} fileName - 업로드 하는 파일의 이름입니다.
 * @throws {number} non-200 HTTP status code
 * @returns {number} 200 HTTP status code
 */
const uploadFile = async (folder, file, fileName) => {
  let formData = new FormData();
  formData.append("folder", folder); //formdata
  formData.append("file", file);
  formData.append("file_name", fileName);
  axios
    .post("/file/upload/", formData)
    .then((res) => res.status)
    .catch((err) => err.response.status);
};

/**
 * 파일을 삭제 합니다.
 * @param {string} fileName - 삭제하는 파일의 이름입니다.
 * @param {string} folder - 삭제하는 파일의 폴더 이름
 * @throws {number} non-200 HTTP status code
 * @returns {number} 200 HTTP status code
 */
const deleteFile = async (folder, fileName) => {
  let formData = new FormData();
  formData.append("file_name", fileName);
  formData.append("folder", folder);
  axios
    .delete("/file/upload/", formData)
    .then((res) => res.status)
    .catch((err) => err.response.status);
};

export { getFileList, uploadFile, deleteFile };
