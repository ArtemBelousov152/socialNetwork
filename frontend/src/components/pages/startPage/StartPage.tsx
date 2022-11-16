import React from "react";
import RegisterPage from "../../registerPage/RegisterPage";
import LoginPage from "../../loginPage/LoginPage";
import LoginIcon from '@mui/icons-material/Login';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { BrowserRouter as Router,
            Routes,
            Route,
            Link        
} from 'react-router-dom';

import './startPage.scss';

const StartPage: React.FC = () => {
    return (
        <Router>
            <nav className="startPage__nav">
                <ul className="startPage__linkList">
                    <li className="startPage__link">
                        <Link to="/">
                            <CloudUploadIcon color="info"/>
                        </Link>
                    </li>
                    <li>
                        <Link to="/login">
                            <LoginIcon color="info"/>
                        </Link>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route path="/" element={<RegisterPage/>}/>
                <Route path="/login" element={<LoginPage/>}/>
            </Routes>
        </Router>
    )
} 

export default StartPage;