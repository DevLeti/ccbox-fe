import {React, useState} from 'react';
import LoginComponent from '../components/LoginComponent';

const LoginContainer = () => {
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
        // TODO: 로그인 API
        }
    };

    return <LoginComponent id={id} password={password} validated={validated} onChangeId={onChangeId} onChangePassword={onChangePassword} handleSubmit={handleSubmit} />
};

export default LoginContainer;