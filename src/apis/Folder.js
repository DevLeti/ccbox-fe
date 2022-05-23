import axios from "axios";

axios.defaults.baseURL = "http://localhost:8000";
axios.defaults.headers.common["Authorization"] = localStorage["JWT"]; // header Authorization 기본 설정

/**
 * 폴더 리스트를 불러옵니다.
 * @throws {number} non-200 HTTP status code
 * @returns {object} folder list
 */
const getFolderList = async () => {
  axios
    .get("/folder/")
    .then((res) => {
      console.log(res.data);
      return res.data;
    })
    .catch((err) => err.response.data);
};

/**
 * 폴더를 생성 합니다.
 * @param {string} parent - 새로운 폴더의 부모 폴더 이름
 * @param {name} name - 새로운 폴더의 이름입니다.
 * @throws {number} non-200 HTTP status code
 * @returns {object} - 새로운 폴더 정보
 */
const newFolder = async (parent, name) => {
  let formData = new FormData();
  formData.append("parent", parent); //formdata
  formData.append("name", name);
  axios
    .post("/folder/new/", formData)
    .then((res) => res.data)
    .catch((err) => err.response.status);
};

/**
 * 폴더를 삭제 합니다.
 * @param {string} folder - 삭제하려는 폴더 이름
 * @throws {number} non-200 HTTP status code
 * @returns {number} 200 HTTP status code
 */
const deleteFolder = async (folder) => {
  let formData = new FormData();
  formData.append("folder_name", folder);
  axios
    .delete("/folder/new/", formData)
    .then((res) => res.status)
    .catch((err) => err.response.status);
};

export { getFolderList, newFolder, deleteFolder };
