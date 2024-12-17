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
            icon: 'pi pi-user',
            children: [
                {
                    key: '0-0',
                    label: 'Informações Gerais',
                    data: 'gerais',
                    icon: 'pi pi-user-edit',
                    
                },
                {
                    key: '0-1',
                    label: 'Alterar senha',
                    data: 'senhaEmail',
                    icon: 'pi pi-lock',
                    
                }
            ]
        },
        {
            key: '1',
            label: 'Indicadores',
            data: 'indicadores',
            icon: 'pi pi-wave-pulse',
            children: [
                {
                    key: '1-0',
                    label: 'Cor da Linha',
                    data: 'coresLinha',
                    icon: 'pi pi-palette',
                },
                {
                key: '1-1',
                    label: 'Espessura da Linha',
                    data: 'linhaConfiguracoes',
                    icon: 'pi pi-minus',
                },
                {
                    key: '1-2',
                    label: 'Estilo da Linha',
                    data: 'estiloLinha',
                    icon: 'pi pi-sparkles',
                },
                {
                    key: '1-3',
                    label: 'Transparência',
                    data: 'transparencia',
                    icon: 'pi pi-sliders-h',
                },
                {
                    key: '1-4',
                    label: 'Definir Limite Superior e Inferior',
                    data: 'definirLimite',
                    icon: 'pi pi-sort-alt',
                },
            ]
        
        },
        {
            key: '2',
            label: 'Segurança',
            data: 'segurança',
            icon: 'pi pi-unlock',
            children: [
                {
                    key: '2-0',
                    label: 'Autenticação por email',
                    data: 'email',
                    icon: 'pi pi-envelope',
                },
            ]
        },
        {
            key: '3',
            label: 'Suporte',
            data: 'suporte',
            icon: 'pi pi-question-circle',
            children: [
                {
                    key: '3-0',
                    label: 'Fale Conosco',
                    data: 'fale',
                    icon: 'pi pi-comment',
                },
                {
                    key: '3-1',
                    label: 'Documentação Técnica',
                    data: 'documentação',
                    icon: 'pi pi-file-pdf',
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
                return <h1 className='h1config'>Perfil do Usuário</h1>;
            
            case 'gerais':
                return <h1 className='h1config'>Informações Gerais</h1>

            case 'senhaEmail':
                return <h1 className='h1config'>Alterar Senha ou Email</h1>;

            case 'indicadores':
                return <h1 className='h1config'>Indicadores</h1>
            
            case 'coresLinha':
                return <h1 className='h1config'>Cores Linha</h1>

            case 'linhaConfiguracoes':
                return <h1 className='h1config'>Configurações de Linha</h1>

            case 'estiloLinha':
                return <h1 className='h1config'>Estilo de Linha</h1>

            case 'transparencia':
                return <h1 className='h1config'>Transparência</h1>

            
            case 'definirLimite': 
                return <h1 className='h1config'>Definir Limites</h1>

            case 'segurança':
                return <h1 className='h1config'>segurança</h1>

            case 'email':
                return <h1 className='h1config'>Segurança Email</h1>

            case 'suporte':
                return <h1 className='h1config'>Suporte</h1>

            case 'fale':
                return <h1 className='h1config'>Fale Conosco</h1>

            case 'documentação':
                return <h1 className='h1config'>Documentação Técnica</h1>

            

            default:
                return <p className='h1config'>Selecione um item do menu para visualizar o conteúdo.</p>;
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