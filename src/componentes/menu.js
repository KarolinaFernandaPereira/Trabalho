import "primereact/resources/themes/viva-dark/theme.css";
import React from 'react';
import { Avatar } from 'primereact/avatar';
import { Menubar } from 'primereact/menubar';
import 'primeicons/primeicons.css';
import { useRef } from 'react';
import { Menu } from 'primereact/menu';
import { Toast } from 'primereact/toast';

export default function MenuHeader() {
      
      const menuEscolhas = useRef(null);
      const toast = useRef(null);
  
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
        },
        {
          label: 'INDICADORES',
          icon: 'pi pi-hourglass',
          url: '/indicadores'
        },
    ];

    const itemsMenu = [
      {
        label: 'Tema',
        icon: 'pi pi-sun'
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

    return (
        <div className="card">
            <Menubar model={items} end={end} style={{borderRadius:0}} />
            <Toast ref={toast}></Toast>
            <Menu model={itemsMenu} popup ref={menuEscolhas} id="popup_menu_right" popupAlignment="right" style={{fontSize: "small", width: "11rem" }}/>
        </div>
    )
}