import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "../styles/Login.css";

const LoginComponent = ({id, password, validated, onChangeId, onChangePassword, handleSubmit}) => {
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

export default LoginComponent;
