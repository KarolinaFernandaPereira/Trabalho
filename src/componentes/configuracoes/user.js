import { Avatar } from 'primereact/avatar'
import React, { useState } from 'react'
import './user.css'
import { InputText } from 'primereact/inputtext'
import { Button } from 'primereact/button';
import { FloatLabel } from "primereact/floatlabel";
import { InputTextarea } from "primereact/inputtextarea";

export const UserConfiguracao = () => {

    const [value, setValue] = useState('');
    const [value1, setValue1] = useState('');

    return (
        <div class="config1">
            <div class="inputs1" >
                <InputText value={value} onChange={(e) => setValue(e.target.value)} placeholder='Nome Completo' className="p-inputtext-lg"/>
                <InputText value={value1} onChange={(e) => setValue1(e.target.value)} placeholder='Usuário' className="p-inputtext-lg"/>
                

                <Button label="Trocar Senha"  raised size="large" style={{backgroundColor: "#50cf06", border: 'none'}}/>
                <InputText value={value1} onChange={(e) => setValue1(e.target.value)} placeholder='Telefone' className="p-inputtext-lg"/>
                <InputText value={value1} onChange={(e) => setValue1(e.target.value)} placeholder='Email' className="p-inputtext-lg"/>
            </div>
            <div class="avatar">
                <Avatar label="P" size="xlarge" shape="circle" style={{width: "10rem", height: "10rem"}}/>
                <span className="p-inputgroup-addon"  >
                    <i className="pi pi-camera"></i>
                </span>
                <FloatLabel>
                    <InputTextarea id="username" value={value} onChange={(e) => setValue(e.target.value)} rows={5} cols={45} />
                    <label htmlFor="username">Resumo Profissional</label>
                </FloatLabel>
            </div>
            
        </div> 
    )
}