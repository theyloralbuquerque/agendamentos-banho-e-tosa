import { FaLock, FaUser } from "react-icons/fa";

import "./Login.css";
import { useState } from "react";

const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        alert('Enviado od dados: ' + username + '-' + password);
    }

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <h1>Acesse o sistema</h1>
                <div className="input-field">
                    <input 
                        type="email" 
                        placeholder="E-mail" 
                        required
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <FaUser className="icon"/>
                </div>
                <div className="input-field">
                    <input 
                        type="password" 
                        placeholder="Senha"
                        onChange={(e) => setPassword(e.target.value)} 
                    />
                    <FaLock className="icon"/>
                </div>

                <div className="recall-forget">
                    <label>
                        <input type="checkbox" />
                        Lembre de mim?
                    </label>
                    <a href="#">Esqueci a senha</a>
                </div>

                <button>Entrar</button>

                <div className="signup-link">
                    <p>Não tem uma conta? <a href="">Registre-se</a></p>
                </div>
            </form>
        </div>
    );
};

export default Login
