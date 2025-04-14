import { Avatar } from 'primereact/avatar'
import React, { useState } from 'react'
import './user.css'
import { InputText } from 'primereact/inputtext'
import { Button } from 'primereact/button';
import { Badge } from 'primereact/badge';   
import axios from "axios";
import { Dialog } from 'primereact/dialog';
import { FileUpload } from 'primereact/fileupload';

export const UserConfiguracao = () => {

    const [value, setValue] = useState('');
    const [value1, setValue1] = useState('');
    const [visible, setVisible] = useState(false);
    const [avatar, setAvatar] = useState('');
    const [selectedFiles, setSelectedFiles] = useState([]);
    const idFiltro = localStorage.getItem('idLogado')

    const uploadFoto = async (event) => {
        const formData = new FormData();


        for (let file of selectedFiles) {
          formData.append('arquivo', file);
          formData.append('id', idFiltro)
        }
  
        await axios.post('http://localhost:3030/usuario/arquivo', formData, {
          headers: {
              'Content-Type': 'multipart/form-data'
          }
        }).then((response) => setAvatar(response.data.avatar));
  
        setVisible(false)
    }

    const footerContent = (
        <div>
            <Button label="Cancelar" icon="pi pi-times" onClick={() => setVisible(false)} className="p-button-text" />
            <Button label="Importar" icon="pi pi-check" onClick={() => uploadFoto()} autoFocus />
        </div>
    );

    const onSelect = (e) => {
        setSelectedFiles(e.files);
    };

    const mostrar = () => {
        setVisible(true)
    }
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
                <Avatar  image={avatar} size="xlarge" shape="circle" style={{width: "10rem", height: "10rem"}} className='p-overlay-badge'>
                    <Badge size="xlarge" value="✏️" style={{backgroundColor: 'rgb(38, 50, 56)' }} onClick={mostrar}/>
                        
                    
                </Avatar>
            </div>

            <Dialog header="Header" visible={visible} style={{ width: '50vw' }} onHide={() => {if (!visible) return; setVisible(false); }} footer={footerContent}>
                <FileUpload name="demo[]" url={'/api/upload'} multiple  maxFileSize={1000000} onSelect={onSelect} emptyTemplate={<p className="m-0">Drag and drop files to here to upload.</p>} />
            </Dialog>
            
        </div> 
    )
}