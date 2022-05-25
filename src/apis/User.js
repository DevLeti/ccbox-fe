import axios from "axios";

axios.defaults.baseURL = "http://localhost:8000";
axios.defaults.headers.common["Authorization"] = localStorage["JWT"];

/**
 * 회원가입을 하는 함수입니다.
 * @param {string} username
 * @param {string} email
 * @param {string} password
 * @throws {number} non-200 HTTP status code
 * @returns {number} 200 HTTP status code
 */
const registerUser = async (username, email, password) => {
  let formData = new FormData();
  formData.append("username", username); //formdata
  formData.append("email", email);
  formData.append("password", password);
  axios
    .post("/user/signup/", formData)
    .then((res) => {
      console.log(res.status);
      return res.status;
    })
    .catch((err) => err.response.status);
};

/**
 * 로그인을 하는 함수입니다. 로그인 성공시 localstorage에 token이 저장됩니다.
 * @param {string} username
 * @param {string} password
 * @throws {number} non-200 HTTP status code
 * @returns {number} 200
 */
const loginUser = (username, password) => {
  let formData = new FormData();
  formData.append("username", username); //formdata
  formData.append("password", password);
  return axios
    .post("/user/signin/", formData)
    .then((res) => {
      console.log(res.data);
      console.log(res.data["token"]);
      localStorage.setItem("JWT", "Bearer " + res.data["token"]);
      return res.status;
    })
    .catch((err) => err.response.status);
};

/**
 * 유저 정보를 가져오는 함수입니다.
 * @param {string} username
 * @param {string} password
 * @throws {number} non-200 HTTP status code
 * @returns {object} {username, email}
 */
const getUserInfo = async () => {
  let formData = new FormData();
  axios
    .get("/user/", formData)
    .then((res) => res.data)
    .catch((err) => err.response.status);
};

export { registerUser, loginUser };
