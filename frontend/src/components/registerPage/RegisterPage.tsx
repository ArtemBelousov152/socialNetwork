import React from "react";
import { useState } from "react";
import LoginRegisterForm from "../templates/loginRefisterForm/LoginRegisterForm";

import './registerPage.scss';

const RegisterPage: React.FC = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const clickHandler = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 1000)
    }

    return (
        <LoginRegisterForm 
            email={email} 
            password={password} 
            loading={loading}
            title={"Регистрация"}
            btnText={"Зарегестрироваться"}
            setEmail={(e) => {setEmail(e.target.value)}}
            setPassword={(e) => {setPassword(e.target.value)}}
            clickHandler={clickHandler}/>
    )
}

export default RegisterPage;