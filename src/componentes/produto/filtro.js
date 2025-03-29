import React, { useState, useEffect } from "react";
import { CascadeSelect } from 'primereact/cascadeselect';
import { Button } from 'primereact/button';
import { Calendar } from 'primereact/calendar';
import { MultiSelect } from 'primereact/multiselect';
import { Dialog } from 'primereact/dialog';
import axios from "axios";

import './filtro.css';

export default function Filtro1({ onFilterChange }) {
    const [selectedPeriodicidade, setselectedPeriodicidade] = useState(null);
    const [selectedSubmercado, setselectedSubmercado] = useState(null);
    const [selectedTipo, setselectedTipo] = useState(null);
    const [selectedEnergia, setselectedEnergia] = useState(null);
    const [selectedContrato, setselectedContrato] = useState(null);
    const [selectedFavorito, setselectedFavorito] = useState(null);

    

    const [date1, setDate1] = useState(null);
    const [date2, setDate2] = useState(null);
    
    const [inputValue, setInputValue] = useState('');

  const [dados, setDados] = useState([]);
  const [elementos, setElementos] = useState([]);

  const api = axios.create({
    baseURL: "http://localhost:3030"
  })

const getDados = async () => {
    await api.get("/filtro/listar").then((response) => setDados(response.data));
}



    useEffect(() => {
        
        getDados();
        
    }, []);

    useEffect(() => {
        // Renderiza os elementos quando os dados mudam
        const novosElementos = dados.map((usuario) => (
          <div key={usuario.id} className="fav_component">
            <i 
              className="pi pi-star-fill" 
              style={{ 
                color: 'slateblue', 
                fontSize: '1.0rem', 
                marginLeft: '25px' 
              }}
            ></i>
            <label className="fav_salvo"> {usuario.nome} </label>
          </div>
        ));
    
        setElementos(novosElementos);
      }, [dados]);

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

    const headerElement = (
        <div className="inline-flex align-items-center justify-content-center gap-2">
            
            <span className="font-bold white-space-nowrap">Salvar Filtro</span>
        </div>
    );
    

    

    
  
    
    
    var str 
    const handleChange = async (event) => {
        setInputValue(event.target.value)
        str = event.target.value; //Nome Filtro
        
        
        
    };
    
    const salvarFav = async () => {
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
            padrao: 0
        }
        
        console.log(JSON.stringify(dict))

        await api.post("/filtro/criar", dict);
        
        favoritos.push(dict)
        console.log(favoritos)
    }

    
   
    
    const footerContent = (
        <div>
            <Button label="Salvar" onClick={() => salvarFav()} autoFocus />

            <div className="fav_chart">
                
                {elementos}
            </div>
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

                </div>

            </div>
        </>
    )
}

// Filtro abrindo e fechando talvez