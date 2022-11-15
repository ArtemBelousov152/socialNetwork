import React from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LoadingButton from '@mui/lab/LoadingButton';
import SendIcon from '@mui/icons-material/Send';
import { useState } from "react";

import './loginPage.scss';

const LoginPage: React.FC = () => {
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const clickHandler = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 1000)
    }

    return (
            <div className="loginPage">
                <Box
                    className="loginPage__sendForm"
                    component='form'
                    autoComplete="off"
                    >
                    <h1 className="loginPage__title">Регистрация</h1>
                    <div className="loginPage__wrapper">
                        <TextField
                            sx={{mb: 4}}
                            placeholder="Введите имя"
                            label="Почта"
                            name="email"
                            type='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            />
                        <TextField
                            sx={{mb: 4}}
                            placeholder="Введите имя"
                            type='password'
                            label="Пароль"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            />
                        <LoadingButton
                            endIcon={<SendIcon/>}
                            variant="contained"
                            loading={loading}
                            loadingPosition="end"
                            onClick={clickHandler}
                            >
                            Отправить
                        </LoadingButton>
                    </div>
                </Box>
            </div>
    )
}

export default LoginPage;