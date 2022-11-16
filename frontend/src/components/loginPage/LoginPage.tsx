import LoginRegisterForm from "../templates/loginRefisterForm/LoginRegisterForm";
import { useState } from "react";

const LoginPage = () => {
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
            title={"Войти"}
            btnText={"Войти"}
            setEmail={(e) => {setEmail(e.target.value)}}
            setPassword={(e) => {setPassword(e.target.value)}}
            clickHandler={clickHandler}/>
    )
}

export default LoginPage;