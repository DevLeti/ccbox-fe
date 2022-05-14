import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "../styles/Register.css";

const RegisterComponent = ({ id, username, email, password, confirmPassword, samePassword, validated, onChangeId, onChangeUsername, onChangeEmail, onChangePassword, onChangeConfirmPassword, handleSubmit }) => {
  return (
    <div className="register">
      <h2 className="register-title">회원가입</h2>
      <Form
        className="register-form"
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
            type="text"
            className="form-control"
            id="form-username"
            placeholder="Username"
            onChange={onChangeUsername}
            value={username}
          />
        </Form.Group>
        <Form.Group className="form-group my-3">
          <Form.Control
            required
            type="email"
            className="form-control"
            id="form-email"
            placeholder="Email"
            onChange={onChangeEmail}
            value={email}
          />
        </Form.Group>
        <Form.Group className="form-group my-3">
          <Form.Control
            required
            isInvalid={!samePassword}
            pattern={confirmPassword}
            type="password"
            className="form-control"
            id="form-password"
            placeholder="Password"
            onChange={onChangePassword}
            value={password}
          />
          <Form.Control.Feedback type="invalid">
            비밀번호를 확인해주세요.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="form-group my-3">
          <Form.Control
            required
            isInvalid={!samePassword}
            pattern={password}
            type="password"
            className="form-control"
            id="form-confirm-password"
            placeholder="Confirm Password"
            onChange={onChangeConfirmPassword}
            value={confirmPassword}
          />
          <Form.Control.Feedback type="invalid">
            비밀번호를 확인해주세요.
          </Form.Control.Feedback>
        </Form.Group>
        <Button type="submit" className="form-button btn btn-primary">
          회원가입
        </Button>
      </Form>
    </div>
  );
};

export default RegisterComponent;
