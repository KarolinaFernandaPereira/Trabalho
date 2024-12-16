import React, {useState} from 'react';
import MenuHeader from '../componentes/menu';
import { Tree } from 'primereact/tree';
import './Config.css'


function Configuracoes(){
    
    const [selectedNode, setSelectedNode] = useState(null);

    const node = [
        {
            key: '0',
            label: 'Perfil do Usuário',
            data: 'user',
            icon: 'pi pi-fw pi-inbox',
            children: [
                {
                    key: '0-0',
                    label: 'Informações Gerais',
                    data: 'gerais',
                    icon: 'pi pi-fw pi-cog',
                    
                },
                {
                    key: '0-1',
                    label: 'Alterar senha ou email',
                    data: 'senhaEmail',
                    icon: 'pi pi-fw pi-home',
                    
                }
            ]
        },
        {
            key: '1',
            label: 'Indicadores',
            data: 'indicadores',
            icon: 'pi pi-fw pi-inbox',
            children: [
                {
                    key: '1-0',
                    label: 'Cor da Linha',
                    data: 'coresLinha',
                    icon: 'pi pi-fw pi-cog',
                    children: [
                        {
                            key: '1-0-0',
                            label: 'Espessura da Linha',
                            data: 'linhaConfiguracoes',
                            icon: 'pi pi-fw pi-home',
                            children: [
                                {
                                    key: '1-0-0-0',
                                    label: 'Estilo da Linha',
                                    data: 'estiloLinha',
                                    icon: 'pi pi-fw pi-home',
                                    children: [
                                        {
                                            key: '1-0-0-0-0',
                                            label: 'Transparência',
                                            data: 'transparencia',
                                            icon: 'pi pi-fw pi-home',
                                        },
                                        {
                                            key: '1-1-0-0-0',
                                            label: 'Definir Limite Superior e Inferior',
                                            data: 'definirLimite',
                                            icon: 'pi pi-fw pi-home',
                                        },
                                    ]
                                }
                            ]
                        }
                    ]
                },
                
            ]
        },
        {
            key: '2',
            label: 'Segurança',
            data: 'segurança',
            icon: 'pi pi-fw pi-inbox',
            children: [
                {
                    key: '2-0',
                    label: 'Autenticação por email',
                    data: 'email',
                    icon: 'pi pi-fw pi-cog',
                },
            ]
        },
        {
            key: '3',
            label: 'Suporte',
            data: 'suporte',
            icon: 'pi pi-fw pi-inbox',
            children: [
                {
                    key: '3-0',
                    label: 'Fale Conosco',
                    data: 'fale',
                    icon: 'pi pi-fw pi-cog',
                    children: [
                        {
                            key: '3-0-0',
                            label: 'Documentação Técnica',
                            data: 'documentação',
                            icon: 'pi pi-fw pi-cog',
                        }
                    ]
                }
            ]
        },
    ]

    const handleNodeSelect = (event) => {
        setSelectedNode(event.node.data); // Atualiza o estado com o identificador do item selecionado
    };


    const renderContent = () => {
        switch (selectedNode) {
            case 'user':
                return <h1>Perfil do Usuário</h1>;
            
            case 'gerais':
                return <h1>Informações Gerais</h1>

            case 'senhaEmail':
                return <h1>Alterar Senha ou Email</h1>;

            case 'indicadores':
                return <h1>Indicadores</h1>
            
            case 'coresLinha':
                return <h1>Cores Linha</h1>

            case 'linhaConfiguracoes':
                return <h1>Configurações de Linha</h1>

            case 'estiloLinha':
                return <h1>Estilo de Linha</h1>

            case 'transparencia':
                return <h1>Transparência</h1>

            
            case 'definirLimite': 
                return <h1>Definir Limites</h1>

            case 'segurança':
                return <h1>segurança</h1>

            case 'email':
                return <h1>Segurança Email</h1>

            case 'suporte':
                return <h1>Suporte</h1>

            case 'fale':
                return <h1>Fale Conosco</h1>

            case 'documentação':
                return <h1>Documentação Técnica</h1>

            

            default:
                return <p>Selecione um item do menu para visualizar o conteúdo.</p>;
        }
    };

    return (
        <div>
            <MenuHeader/>

            <div className='config-container'>
                <div className='menu'>

                    <Tree value={node} className="arvoreMenu" onNodeClick={handleNodeSelect}/>
                </div>
                <div className='tela'>
                    {renderContent()}
                </div>
            </div>
        </div>
    )
}

export default Configuracoes