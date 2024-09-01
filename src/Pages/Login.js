import React, { useState } from 'react';
import "./Login.css";
import 'primeicons/primeicons.css';

function Login(){

    const [senha, setSenha] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault()
    
    
        if(email === "admin@gmail.com" && senha === "admin"){
            window.location.replace("/home")
        }
    }


    return(
        <div className="containerLogin">
            <div className='loginCard'>
                <form onSubmit={handleSubmit} className='loginForm'>
                    <img className='logo' src='https://static.wixstatic.com/media/91fcc4_b24b8180ab9d490a860c7c71fb8f46d7~mv2.png/v1/fill/w_340,h_100,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Pontoon%2520-%2520Logotipo%2520CT-02_edited.png' alt='dkeodke'/>
                    <div className='inputDiv'>
                        <input type='email' placeholder='E-mail'
                        onChange={(e) => setEmail(e.target.value)}
                        className='inputLogin'/>
                        <span className='pi pi-user'></span>
                    </div>
                    <div className='inputDiv'>
                        <input type='password' placeholder='Senha'
                        onChange={(e) => setSenha(e.target.value)}
                        className='inputLogin'/>
                        <span className='pi pi-lock'></span>
                    </div>
                    <button className='loginButton'>Entrar</button>
                </form>
            </div>
        </div>
    );
}

export default Login;