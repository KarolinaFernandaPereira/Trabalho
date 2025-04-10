import React, { useState } from 'react';
import "./Login.css";
import 'primeicons/primeicons.css';
import { Button } from 'primereact/button';
import axios from "axios";

function Login(){

    const [senha, setSenha] = useState("");
    const [email, setEmail] = useState("");

    const [logado, setLogado] = useState();
    const api = axios.create({
        baseURL: "http://localhost:3030"
    })


    
    const handleSubmit = async (event) => {
        event.preventDefault()
        
        if(email == "" || senha == ""){
            localStorage.setItem('logadoNome', 'AD')
            
            window.location.replace("/home")
        }else {
            const res = await api.post("/usuario/login", {
                email: email,
                senha: senha
            })
    
            const uLogado = res.data
    
            
    
            const palavras = uLogado.nome.split(' ');
            
            
            if (palavras.length >= 2) {
                
                const primeiraInicial = palavras[0].charAt(0).toUpperCase();
                const segundaInicial = palavras[1].charAt(0).toUpperCase();
                
                
                
                localStorage.setItem('logadoNome', primeiraInicial + segundaInicial)
                localStorage.setItem('idLogado', uLogado.id)
                window.location.replace("/home")
            } else {
                
                localStorage.setItem('logadoNome', palavras[0].charAt(0).toUpperCase());
            }
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
                        <span className='pi pi-user' style={{ fontSize: '1.5rem' }} ></span>
                    </div>
                    <div className='inputDiv'>
                        <input type='password' placeholder='Senha'
                        onChange={(e) => setSenha(e.target.value)}
                        className='inputLogin'/>
                        <span className='pi pi-lock' style={{ fontSize: '1.5rem' }} ></span>
                    </div>
                    <button className='loginButton'>Entrar</button>
                </form>
            </div>
        </div>
    );
}

export default Login;