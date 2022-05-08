import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "./Login.css";

const Login = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [validated, setValidated] = useState(false);

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
    }
  };
  return (
    <div className="login">
      <h2 className="login-title">로그인</h2>
      <Form
        className="login-form"
        action=""
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
      >
        <Form.Group className="form-group my-3">
          <Form.Control
            required
            type="text"
            className="form-control"
            id="form-id"
            placeholder="ID"
            onChange={onChangeId}
            value={id}
          />
        </Form.Group>
        <Form.Group className="form-group my-3">
          <Form.Control
            required
            type="password"
            className="form-control"
            id="form-password"
            placeholder="Password"
            onChange={onChangePassword}
            value={password}
          />
        </Form.Group>
        <Button type="submit" className="form-button btn btn-primary">
          로그인
        </Button>
      </Form>
    </div>
  );
};

export { Login };
