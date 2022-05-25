import { useState } from "react";
import RegisterComponent from "../components/RegisterComponent";
import { registerUser } from "../apis/User";

const RegisterContainer = () => {
  const [id, setId] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [samePassword, setSamePassword] = useState(true);
  const [validated, setValidated] = useState(false);

  const onChangeId = (e) => {
    setId(e.target.value);
  };
  const onChangeUsername = (e) => {
    setUsername(e.target.value);
  };
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
    setSamePassword(e.target.value === confirmPassword);
  };
  const onChangeConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
    setSamePassword(e.target.value === password);
  };
  const handleSubmit = (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
      setValidated(true);
    } else {
      e.preventDefault();
      registerUser(id, email, password)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
      // TODO: Register API, 중복 체크 API 등등
    }
  };

  return (
    <RegisterComponent
      id={id}
      username={username}
      email={email}
      password={password}
      confirmPassword={confirmPassword}
      samePassword={samePassword}
      validated={validated}
      onChangeId={onChangeId}
      onChangeUsername={onChangeUsername}
      onChangeEmail={onChangeEmail}
      onChangePassword={onChangePassword}
      onChangeConfirmPassword={onChangeConfirmPassword}
      handleSubmit={handleSubmit}
    />
  );
};

export default RegisterContainer;
