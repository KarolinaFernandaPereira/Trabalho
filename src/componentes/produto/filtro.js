import React, { useState, useEffect } from "react";
import { CascadeSelect } from 'primereact/cascadeselect';
import { Button } from 'primereact/button';
import { Calendar } from 'primereact/calendar';
import { MultiSelect } from 'primereact/multiselect';
import { Dialog } from 'primereact/dialog';
import axios from "axios";

import './filtro.css';
import { type } from "@testing-library/user-event/dist/type";

export default function Filtro1({ onFilterChange }) {
    var [selectedPeriodicidade, setselectedPeriodicidade] = useState(null);
    var [selectedSubmercado, setselectedSubmercado] = useState(null);
    var [selectedTipo, setselectedTipo] = useState(null);
    var [selectedEnergia, setselectedEnergia] = useState(null);
    var [selectedContrato, setselectedContrato] = useState(null);
    var [selectedFavorito, setselectedFavorito] = useState(null);

    

    const [date1, setDate1] = useState(null);
    const [date2, setDate2] = useState(null);
    
    const [inputValue, setInputValue] = useState('');

  const [dados, setDados] = useState([]);
  const [elementos, setElementos] = useState([]);

  const api = axios.create({
    baseURL: "http://localhost:3030"
  })
  

const getDados = async () => {
    await api.get("/filtro/listar", {
        params: {
            id: idFiltro
        }
    }).then((response) => setDados(response.data));
}

const idFiltro = localStorage.getItem('idLogado')

const getPadrao = async () => {
    await api.get("/filtro/padrao", {
        params: {
            id: idFiltro
        }
    }).then((response) => setFiltro(response.data));
}

    useEffect(() => {
        
        getDados();
        
        getPadrao();
        
    }, []);
    
    //Inicar Favoritos
    useEffect(() => {
        const novosElementos = dados.map((usuario) => {
            
            let elementoAdicional = null;
            if (usuario.padrao == 1) {
              elementoAdicional = (
                <>
                    <i
                      className="pi pi-check"
                      style={{
                          color: 'slateblue',
                          fontSize: '1.0rem',
                          marginLeft: '10px',
                          marginRight: '2px'
                      }}
                      onClick={() => setFavorito(usuario.id)}
                    ></i>
                    <label onClick={() => setFavorito(usuario.id)}>Padrão</label>
                </>
            );
              
            } else {
                elementoAdicional = (
                    <>
                        <i
                        className="pi pi-stop"
                        style={{
                            color: 'slateblue',
                            fontSize: '1.0rem',
                            marginLeft: '10px',
                            marginRight: '2px'
                        }}
                        onClick={() => setFavoritoBanco(usuario.id, usuario.nome)}
                        ></i>

                        <label onClick={() => setFavoritoBanco(usuario.id)}>Padrão</label>
                    </>
                )
            }
            
            
            
            return (
              <div key={usuario.id} className="fav_component">
                <i 
                  className="pi pi-star-fill" 
                  style={{ 
                    color: 'slateblue', 
                    fontSize: '1.0rem', 
                    marginLeft: '25px' 
                  }}
                  onClick={() => desvaforitar(usuario.id, usuario.nome)}
                ></i>
                <label className="fav_salvo"> {usuario.nome} </label>
                {elementoAdicional}
              </div>
            );
          });
          
        setElementos(novosElementos);
    }, [dados]);


    const [filtro, setFiltro] = useState()
    const [deleteFiltro, setDeleteFiltro] = useState()
    const [deleteNome, setDeleteNome] = useState()

    const desvaforitar = (id, nome) => {
        setDeleteFiltro(id)
        setVisible1(true)
        setDeleteNome(nome)
    }

    const confirmarDeelete = async () => {
        const id = parseInt(deleteFiltro)

        await api.delete("/filtro/deletar/", {
            params: {id : id}
        });

        getDados();
        setVisible1(false)

        setDeleteFiltro(null)

    }


    const setFavoritoBanco = async (id) => {
        await api.get("filtro/favoritar/", {
            params: { id : id}
        }).then((response) => setFiltro(response.data));

        getDados();
        setVisible(false)
    }

    const setFavorito = async (id) => {
       await api.get("filtro/list/", {
        params: { id : id}
       }).then((response) => setFiltro(response.data));

       getDados();

    }

    const formateData = (dateF) => {
        const parts = dateF.split(/[^0-9]/);
        const year = parseInt(parts[0]);
        const month = parseInt(parts[1]) - 1; // JavaScript meses são 0-11
        const day = parseInt(parts[2]);
        const hour = parseInt(parts[3] || 0);
        const minute = parseInt(parts[4] || 0);
        const second = parseInt(parts[5] || 0);

        const date = new Date(year, month, day, hour, minute, second);

        return date
    }


    useEffect(() => {
        console.log(filtro)
        if(filtro == "Nada Cadastrado"){
           return;
        }

        if(filtro != undefined){

            const subFiltro = filtro.submercado.split("_").filter((item) => item !== "");
            const energiaFiltro = filtro.energia.split("_").filter((item) => item !== "");
            const contratoFiltro = filtro.contrato;
            const tipoFiltro = filtro.tipo.split("_").filter((item) => item !== "");
            const periodiFiltro = filtro.periodicidade;

            const ativo = filtro.ativo;
            const padrao = filtro.padrao;
        
            function buscarSubmercados(codigos) {
                return submercados.filter((submercado) => codigos.includes(submercado.code));
            }
        
            function buscarEnergia(codigos) {
                return energia.filter((energia) => codigos.includes(energia.code));
            }
        
            function buscarTipo(codigos) {
                return tipos.filter((tipo) => codigos.includes(tipo.code));
            }

            function buscarContrato(codigos) {
                return contrato.find(cont => cont.code == codigos);
            }

            function buscarPeriodicidade(codigos) {
                return periodicidade.find(cont => cont.code == codigos);
            }



            selectedSubmercado = buscarSubmercados(subFiltro)
            selectedEnergia = buscarEnergia(energiaFiltro)
            selectedContrato = buscarContrato(contratoFiltro)
            selectedTipo = buscarTipo(tipoFiltro)
            selectedPeriodicidade = buscarPeriodicidade(periodiFiltro)
            
            
            
            setDate1(formateData(filtro.dataInicial))
            setDate2(formateData(filtro.dataFinal))

            setselectedSubmercado(selectedSubmercado)
            setselectedEnergia(selectedEnergia)
            setselectedTipo(selectedTipo)
            setselectedContrato(selectedContrato)
            setselectedPeriodicidade(selectedPeriodicidade)

            setVisible(false)
                
        } 


    }, [filtro]);
    

    const periodicidade = [
        {
            cname: 'Diária', code: 'DIA',
        },
        {
            cname: 'Semanal', code: 'SEM',
        },
        {
            cname: 'Quinzenal', code: 'QUI',
        },
        {
            cname: 'Bimestral', code: 'BIM',
        },
        {
            cname: 'Mensal', code: 'MEN',
        },
        {
            cname: 'Trimestral', code: 'TRI',
        },
        {
            cname: 'Semestral', code: 'SEME',
        },
        {
            cname: 'Anual', code: 'ANU',
        },
        {
            cname: 'Outros', code: 'OTR',
        },
    ];

    const submercados = [
        {
            name: 'Sudeste', code: 'SE',
        },
        {
            name: 'Sul', code: 'S',
        },
        {
            name: 'Nordeste', code: 'NE',
        },
        {
            name: 'Norte', code: 'N',
        },
        {
            name: 'Centro-Oeste', code: 'CO',
        },
    ];

    const tipos = [
        {
            name: 'Spread', code: 'Spread',
        },
        {
            name: 'Preço Fixo', code: 'Preço Fixo',
        },
    ];

    const energia = [
        {
            name: 'CONV', code: 'CONV',
        },
        {
            name: 'I0', code: 'I0',
        },
        {
            name: 'I5', code: 'I5',
        },
        {
            name: 'I1', code: 'I1',
        },
        {
            name: 'I8', code: 'I8',
        },
        {
            name: 'CQ5', code: 'CQ5',
        },
        {
            name: 'CQ1', code: 'CQ1',
        }, 
    ];

    const contrato = [
        {
            name: 'Registro', code: 'reg',
        },
        {
            name: 'Boleta', code: 'bol',
        },
    ];

    const favoritos = [
        {
            name: 'Sudeste I5', code: 'sud',
        },
        {
            name: 'Norte Spread', code: 'nor',
        }
    ];

    const Limpar = () => {
        setselectedPeriodicidade(null);
        setselectedSubmercado(null);
        setselectedTipo(null);
        setselectedEnergia(null);
        setselectedContrato(null);
        setselectedFavorito(null);
        setDate1(null);
        setDate2(null);
    }

    var filteredResults = {}

    const handleSub = (event) => {
        filteredResults.contrato = selectedContrato
        filteredResults.submercado = selectedSubmercado
        filteredResults.periodicidade = selectedPeriodicidade
        filteredResults.tipo = selectedTipo
        filteredResults.energia = selectedEnergia

           

        onFilterChange(filteredResults);
    }

    const [visible, setVisible] = useState(false);
    const [visible1, setVisible1] = useState(false);

    const headerElement = (
        <div className="inline-flex align-items-center justify-content-center gap-2">
            
            <span className="font-bold white-space-nowrap">Salvar Filtro</span>
        </div>
    );

    const headerElement1 = (
        <div className="inline-flex align-items-center justify-content-center gap-2">
            
            <span className="font-bold white-space-nowrap">Desvaforitar Filtro</span>
        </div>
    );
    

    

    
  
    
    
    var str 
    const handleChange = async (event) => {

        setInputValue(event.target.value)
        str = event.target.value; 

        console.log(date1)

    };
    
    const salvarFav = async () => {
        
        
        const idLogado = localStorage.getItem('idLogado')
        console.log(idLogado)
        
        const dict = {
            name: inputValue,
            
            submercado: selectedSubmercado,
            tipo: selectedTipo,
            periodicidade: selectedPeriodicidade,
            dataIni: date1 ,
            dataFin: date2 ,
            contrato: selectedContrato ,
            energia: selectedEnergia,
            ativo: 1,
            padrao: 0,
            userId: parseInt(idLogado)
        }
        
        
        const teste = JSON.stringify(dict)

        console.log(JSON.parse(teste))

        await api.post("/filtro/criar", dict);
        getDados();
        
        favoritos.push(dict)
        
        console.log(favoritos)
        setInputValue(null)
        
        setVisible(false)
    }

    
   
    
    const footerContent = (
        <div>
            <Button label="Salvar" onClick={() => salvarFav()} autoFocus />

            <div className="fav_chart">
                
                {elementos}
            </div>
        </div>
        
    );

    const footerContent1 = (
        <div>
            <Button label="Desfavoritar" onClick={() => confirmarDeelete()} autoFocus />
        </div>
        
    );

    
    
    return (
        <>
            {/* <div className="cardFiltro">
                    <span className="labelsFiltro"> FAVORITOS: </span>
                    <CascadeSelect value={selectedFavorito} onChange={(e) => setselectedFavorito(e.value)} options={favoritos} 
                        optionLabel="name" optionGroupChildren={['favorito']}
                        className="filtroContrato" breakpoint="767px" />
            </div> */}

            <div className="conjunto">
                <div className="conjunto1">
                    {/* SUBMERCADO */}
                    <div className="cardFiltro">
                        <span className="labelsFiltro"> SUBMERCADO: </span>
                        <MultiSelect value={selectedSubmercado} onChange={(e) => setselectedSubmercado(e.value)} options={submercados} 
                            display="chip" optionLabel="name" optionGroupChildren={['submercados']}
                            className="filtroSubmercado" breakpoint="767px" />
                    </div>

                    {/* ENERGIA */}
                    <div className="cardFiltro">
                        <span className="labelsFiltro"> ENERGIA: </span>
                        <MultiSelect value={selectedEnergia} onChange={(e) => setselectedEnergia(e.value)} options={energia} 
                            display="chip" optionLabel="name" optionGroupChildren={['energia']}
                            className="filtroEnergia" breakpoint="767px" />
                    </div>

                    {/* TIPO DE ENERGIA */}
                    <div className="cardFiltro">
                        <span className="labelsFiltro"> TIPO: </span>
                        <MultiSelect value={selectedTipo} onChange={(e) => setselectedTipo(e.value)} options={tipos}
                            display="chip" optionLabel="name" optionGroupChildren={['tipos']} 
                            className="filtroTipo" breakpoint="767px" />
                    </div>
                    
                </div> 

                <div className="conjunto1" >
                    
                    {/* CONTRATO */}
                    <div className="cardFiltro">
                        <span className="labelsFiltro"> CONTRATO: </span>
                        <CascadeSelect value={selectedContrato} onChange={(e) => setselectedContrato(e.value)} options={contrato} 
                            optionLabel="name" optionGroupChildren={['contrato']}
                            className="filtroContrato" breakpoint="767px" />
                    </div>

                    {/* PERIODICIDADE */}
                    <div className="cardFiltro">
                        <span className="labelsFiltro"> PERIODICIDADE: </span>
                        <CascadeSelect value={selectedPeriodicidade} onChange={(e) => setselectedPeriodicidade(e.value)} options={periodicidade} 
                            optionLabel="cname" optionGroupChildren={['periodicidade']}
                            className="filtroPeriodicidade" breakpoint="767px" />
                    </div>

                    {/* DATAS */}
                    <div className="cardFiltro">
                        <span className="labelsFiltro"> MÊS INICIAL: </span>
                        <Calendar value={date1} onChange={(e) => setDate1(e.value)} view="month" dateFormat="mm/yy" className="filtroDatas"/>

                        <span className="labelsFiltro"> MÊS FINAL: </span>
                        <Calendar value={date2} onChange={(e) => setDate2(e.value)} view="month" dateFormat="mm/yy" className="filtroDatas" style={{fontSize: "small"}} />
                    </div>

                    <Button label="Filtrar" className="botaoFiltro" onClick={handleSub}/>
                    <Button label="Limpar" className="botaoLimpar" onClick={Limpar} />
                    <i className="pi pi-star" style={{ color: 'slateblue', fontSize: '1.5rem', marginLeft: '25px' }}
                        onClick={() => setVisible(true)}></i>

                    <Dialog visible={visible} modal header={headerElement} footer={footerContent} style={{ width: '30%'}} onHide={() => {if (!visible) return; setVisible(false); }}>
                        <div className="dialog_content">
                            <span style={{fontSize:"small"}} >Dê um nome para o filtro:</span>
                            <input type="text" value={inputValue} onChange={handleChange} style={{fontSize:"small"}}></input>
                        </div>
                    </Dialog>

                    <Dialog visible={visible1} modal header={headerElement} footer={footerContent1} style={{ width: '30%'}} onHide={() => {if (!visible1) return; setVisible1(false); }}>
                        <div className="dialog_content">
                            <span style={{fontSize:"small"}} >Desfavoritar Filtro</span>
                            <label>{deleteNome}</label>
                        </div>
                    </Dialog>
                </div>

            </div>
        </>
    )
}

// Filtro abrindo e fechando talvez