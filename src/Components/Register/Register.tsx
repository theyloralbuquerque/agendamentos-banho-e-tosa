import { FaLock, FaUser, FaEnvelope, FaPhone } from "react-icons/fa";
import "./Register.css";
import { useState } from "react";

const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        // Verificar se as senhas coincidem
        if (password !== confirmPassword) {
            alert("As senhas não coincidem!");
            return;
        }

        // Enviar dados para a API de registro
        alert(`Dados enviados:\nUsuário: ${username}\nE-mail: ${email}\nTelefone: ${phone}`);
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <h1>Crie sua conta</h1>
                <div className="input-field">
                    <input 
                        type="text" 
                        placeholder="Nome de Usuário" 
                        required
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <FaUser className="icon"/>
                </div>
                <div className="input-field">
                    <input 
                        type="email" 
                        placeholder="E-mail" 
                        required
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <FaEnvelope className="icon"/>
                </div>
                <div className="input-field">
                    <input 
                        type="tel" 
                        placeholder="Telefone" 
                        onChange={(e) => setPhone(e.target.value)}
                    />
                    <FaPhone className="icon"/>
                </div>
                <div className="input-field">
                    <input 
                        type="password" 
                        placeholder="Senha"
                        required
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <FaLock className="icon"/>
                </div>
                <div className="input-field">
                    <input 
                        type="password" 
                        placeholder="Confirme a Senha"
                        required
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <FaLock className="icon"/>
                </div>
                
                <button>Registrar</button>

                <div className="login-link">
                    <p>Já tem uma conta? <a href="/login">Faça login</a></p>
                </div>
            </form>
        </div>
    );
};

export default Register;
