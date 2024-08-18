import "primereact/resources/themes/viva-dark/theme.css";
import React from 'react';
import { Avatar } from 'primereact/avatar';
import { Menubar } from 'primereact/menubar';
import 'primeicons/primeicons.css';

export default function MenuHeader() {
    const items = [
        {
            label: 'RESUMO',
            icon: 'pi pi-home',
            url: '/',
        },
        {
          label: 'VOLUMES',
          icon: 'pi pi-chart-line',
          url: '/volume',
        },
        {
          label: 'PREÇOS',
          icon: 'pi pi-chart-line',
          url: '/preco',
        },
        {
          label: 'OUTROS',
          icon: 'pi pi-equals',
          items:[
            {
                label: 'AGRESSÕES',
                icon: 'pi pi-chart-bar',
                url: '/agressoes',
            },
            {
              label: 'SWAP',
              icon: 'pi pi-chart-bar',
              url: '/swap',
          },
          ]
        },
    ];

    const end = (
        <Avatar label="KP" size="large" shape="circle" style={{ backgroundColor: '#b71465', color: '#ffffff' }} />
    );

    return (
        <div className="card">
            <Menubar model={items} end={end} style={{borderRadius:0}} />
        </div>
    )
}