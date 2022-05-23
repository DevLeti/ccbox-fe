import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginComponent from "../components/LoginComponent";
import { loginUser } from "../apis/User";
import { useSetRecoilState } from "recoil";
import { loggedInState } from "../recoil/atom";

const LoginContainer = () => {
  let setloggedInState = useSetRecoilState(loggedInState);
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [validated, setValidated] = useState(false);
  const navigate = useNavigate();

  const onChangeId = (e) => {
    setId(e.target.value);
    setValidated(false);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
    setValidated(false);
  };

  const handleSubmit = (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
      setValidated(true);
    } else {
      // TODO: 로그인 API
      e.preventDefault();
      loginUser(id, password)
        .then((res) => {
          setloggedInState(() => true);
          return navigate("/user");
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <LoginComponent
      id={id}
      password={password}
      validated={validated}
      onChangeId={onChangeId}
      onChangePassword={onChangePassword}
      handleSubmit={handleSubmit}
    />
  );
};

export default LoginContainer;
