import React from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LoadingButton from '@mui/lab/LoadingButton';
import SendIcon from '@mui/icons-material/Send';

import './loginRegisterForm.scss';

interface ILoginRegisterFormProps {
    email: string;
    password: string;
    loading: boolean;
    title: string;
    btnText: string;
    setEmail: (e: React.ChangeEvent<HTMLInputElement>) => void;
    setPassword: (e: React.ChangeEvent<HTMLInputElement>) => void;
    clickHandler: () => void;
}

const LoginRegisterForm: React.FC<ILoginRegisterFormProps> = ({email, password, loading, title, btnText, setEmail, setPassword, clickHandler} ) => {
    return (
        <div className="loginRegisterForm">
                <Box
                    className="loginRegisterForm__sendForm"
                    component='form'
                    autoComplete="off"
                    >
                    <h1 className="loginRegisterForm__title">{title}</h1>
                    <div className="loginRegisterForm__wrapper">
                        <TextField
                            sx={{mb: 4}}
                            placeholder="Введите почту"
                            label="Почта"
                            name="email"
                            type='email'
                            value={email}
                            onChange={setEmail}
                            />
                        <TextField
                            sx={{mb: 4}}
                            placeholder="Введите пароль"
                            type='password'
                            label="Пароль"
                            name="password"
                            value={password}
                            onChange={setPassword}
                            />
                        <LoadingButton
                            endIcon={<SendIcon/>}
                            variant="contained"
                            loading={loading}
                            loadingPosition="end"
                            onClick={clickHandler}
                            >
                            {btnText}
                        </LoadingButton>
                    </div>
                </Box>
            </div>
    )
}

export default LoginRegisterForm;