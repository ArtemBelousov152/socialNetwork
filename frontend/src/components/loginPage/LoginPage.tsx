import LoginRegisterForm from "../templates/loginRefisterForm/LoginRegisterForm";
import { useState } from "react";
import axios from "axios";

const LoginPage = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const clickHandler = () => {
        setLoading(true);

        axios.post('http://localhost:8001/user/getuser', {
            email,
            password
        })
        .then((res) => console.log(res))

        setLoading(false)
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