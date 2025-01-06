import React, {useState} from 'react';
import MenuHeader from '../componentes/menu';
import { Tree } from 'primereact/tree';
import './Config.css'
import { UserConfiguracao } from '../componentes/configuracoes/user';
import { IndicadoresConfiguracoes } from '../componentes/configuracoes/indicadores';


function Configuracoes(){
    
    const [selectedNode, setSelectedNode] = useState(null);

    const node = [
        {
            key: '0',
            label: 'Perfil do Usuário',
            data: 'user',
            icon: 'pi pi-user',
        },
        {
            key: '1',
            label: 'Indicadores',
            data: 'indicadores',
            icon: 'pi pi-wave-pulse',
        },
        {
            key: '2',
            label: 'Segurança',
            data: 'segurança',
            icon: 'pi pi-unlock',
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
                return <UserConfiguracao />;
            
            case 'gerais':
                return <h1 className='h1config'>Informações Gerais</h1>

            case 'senhaEmail':
                return <h1 className='h1config'>Alterar Senha ou Email</h1>;

            case 'indicadores':
                return <IndicadoresConfiguracoes />
            
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
        <div style={{height: '100vh'}}>
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