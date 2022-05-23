import { Fragment } from "react";
import { loggedInState } from "../../recoil/atom";
import { Navbar, Nav } from "react-bootstrap";
import logo from "../../assets/image/logo.png";
import "./Header.css";
import { useRecoilValue, useSetRecoilState } from "recoil";

const NonUserButton = () => {
  return (
    <Fragment>
      <Login />
      <Register />
    </Fragment>
  );
};
const Login = () => {
  return (
    <Nav.Link href="login" className="rounded bg-secondary text-white m-1 px-3">
      로그인
    </Nav.Link>
  );
};
const Logout = () => {
  let setloggedInState = useSetRecoilState(loggedInState);
  let setloggedInStateFalse = () => {
    localStorage.setItem("JWT", null);
    setloggedInState(() => false);
  };
  return (
    <Nav.Link
      href="/"
      className="rounded bg-secondary text-white m-1 px-3"
      onClick={setloggedInStateFalse}
    >
      로그아웃
    </Nav.Link>
  );
};
const Register = () => {
  return (
    <Nav.Link
      href="register"
      eventKey="1"
      className="rounded bg-primary text-white m-1 px-3"
    >
      회원가입
    </Nav.Link>
  );
};

const Header = () => {
  const loggedIn = useRecoilValue(loggedInState);
  return (
    // py-0~5 높이 조절
    <Navbar bg="white" expand="lg" className="fixed-top py-0 p-2">
      <Navbar.Brand href="/" className="mb-0">
        <img
          alt="logo"
          src={logo}
          width="50"
          height="50"
          className="d-inline-block align-middle"
        />
        CCBOX
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        {/* ms-auto: 우측, me-auto: 좌측 정렬 */}
        <Nav className="ms-auto">
          {loggedIn ? <Logout /> : null}
          {!loggedIn ? <NonUserButton /> : null}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
