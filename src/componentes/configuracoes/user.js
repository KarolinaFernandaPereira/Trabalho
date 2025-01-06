import { Avatar } from 'primereact/avatar'
import React, { useState } from 'react'
import './user.css'
import { InputText } from 'primereact/inputtext'
import { Button } from 'primereact/button';
import { FloatLabel } from "primereact/floatlabel";
import { InputTextarea } from "primereact/inputtextarea";
import { Badge } from 'primereact/badge';

export const UserConfiguracao = () => {

    const [value, setValue] = useState('');
    const [value1, setValue1] = useState('');

    return (
        <div class="config1">
            <div class="inputs1" >
                <InputText value={value} onChange={(e) => setValue(e.target.value)} placeholder='Nome Completo' className="p-inputtext-lg"/>
                <InputText value={value1} onChange={(e) => setValue1(e.target.value)} placeholder='Usuário' className="p-inputtext-lg"/>
                

                <InputText value={value1} onChange={(e) => setValue1(e.target.value)} placeholder='Telefone' className="p-inputtext-lg"/>
                <InputText value={value1} onChange={(e) => setValue1(e.target.value)} placeholder='Email' className="p-inputtext-lg"/>
                <Button label="Trocar Senha"  raised size="large" style={{backgroundColor: 'rgb(250, 92, 48)', border: 'none'}}/>
            </div>
            <div class="avatar">
                <Avatar label="P" size="xlarge" shape="circle" style={{width: "10rem", height: "10rem"}} className='p-overlay-badge'>
                    <Badge size="xlarge" value="✏️" style={{backgroundColor: 'rgb(38, 50, 56)' }} />
                        
                    
                </Avatar>
            </div>
            
        </div> 
    )
}