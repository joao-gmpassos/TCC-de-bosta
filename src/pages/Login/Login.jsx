import React from "react";
import './LoginStyle.css'
import { FaUserCircle, FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="pagina">
            <div className="titulo"><h1>Menu de Login</h1></div>
                <div className="login">
                    <div className="box">
                        <FaUserCircle className="icon" />
                        <input type="text" placeholder="User" required maxLength={20} />
                    </div>
                    <div className="box">
                        <FaLock className="icon" />
                        <input type="password" placeholder="Senha" required maxLength={30} />
                    </div>
                    <Link className="botao" to='/menu'>Entrar</Link>
                </div>
        </div>
    )
}


export default Login;