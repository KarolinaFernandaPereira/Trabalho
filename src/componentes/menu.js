import "primereact/resources/themes/viva-dark/theme.css";
import React, { useState, useEffect } from 'react';
import { Avatar } from 'primereact/avatar';
import { Menubar } from 'primereact/menubar';
import 'primeicons/primeicons.css';
import { useRef } from 'react';
import { Menu } from 'primereact/menu';
import { Toast } from 'primereact/toast';
import axios from "axios";
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { FileUpload } from 'primereact/fileupload';

export default function MenuHeader() {
      
      const menuEscolhas = useRef(null);
      const toast = useRef(null);

      const [teste, setTeste] = useState([]);
      const [visible, setVisible] = useState(false);


      const api = axios.create({
          baseURL: "http://localhost:3030"
      })

      const getDados = async () => {
          await api.get("/produto/teste").then((response) => toast.current.show({severity:'success', summary: 'Success', detail: response.data, life: 3000}));
      }

      const mostrar = () => {
        setVisible(true)
      }

      
      
        

      const items = [
        {
          label: 'RESUMO',
          icon: 'pi pi-home',
          url: '/home'
        },
        {
          label: 'PRODUTO',
          icon: 'pi pi-chart-line',
          url: '/produto'
        },
        {
          label: 'SWAP',
          icon: 'pi pi-chart-bar',
          url: '/swap'
        },
        {
          label: 'PREÇO LP',
          icon: 'pi pi-chart-bar',
          url: '/precolp'
        }
      ];

    const itemsMenu = [
      {
        label: 'Importar Dados',
        icon: 'pi pi-upload',
        command: (e) => mostrar()
      },
      {
        label: 'Configurações',
        icon: 'pi pi-cog',
        url: '/configuracoes'
      },
      {
        label: 'Sair',
        icon: 'pi pi-sign-out',
        url: '/'
      },
  ];

    const end = (
        <Avatar label="KP" size="large" shape="circle" className="mr-2" 
        onClick={(event) => menuEscolhas.current.toggle(event)} aria-controls="popup_menu_right" aria-haspopup
        style={{ backgroundColor: '#b71465', color: '#ffffff' }} />
    );

    const footerContent = (
      <div>
          <Button label="Cancelar" icon="pi pi-times" onClick={() => setVisible(false)} className="p-button-text" />
          <Button label="Importar" icon="pi pi-check" onClick={() => setVisible(false)} autoFocus />
      </div>
    );

    return (
        <div className="card">
            <Menubar model={items} end={end} style={{borderRadius:0}} />
            <Toast ref={toast}></Toast>
            
            <Menu model={itemsMenu} popup ref={menuEscolhas} id="popup_menu_right" popupAlignment="right" style={{fontSize: "small", width: "11rem" }}/>

            
        
            <Dialog header="Header" visible={visible} style={{ width: '50vw' }} onHide={() => {if (!visible) return; setVisible(false); }} footer={footerContent}>
                <FileUpload name="demo[]" url={'/api/upload'} multiple accept="image/*" maxFileSize={1000000} emptyTemplate={<p className="m-0">Drag and drop files to here to upload.</p>} />
            </Dialog>
        
        </div>
    )
}