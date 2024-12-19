import { FloatLabel } from 'primereact/floatlabel'
import React, { useState } from 'react'
import { Dropdown } from 'primereact/dropdown';
import './indicadores.css'
import { GraficoMacd } from '../indicadores/macd';
import { ColorPicker } from 'primereact/colorpicker';
import { RadioButton } from "primereact/radiobutton";
import { Checkbox } from 'primereact/checkbox';
import { Slider } from "primereact/slider";
import { InputNumber } from 'primereact/inputnumber';
import { GraficoSar } from '../indicadores/sar';
import { GraficoAtr } from '../indicadores/atr';
import { GraficoRsi } from '../indicadores/rsi';
import { GraficoSupertrendNew } from '../indicadores/supertrendNew';
import { BollingerBandsArea } from '../indicadores/bandasbollinger';
import { GraficoMediasMoveis } from '../indicadores/mediasMoveis';

export const IndicadoresConfiguracoes = () => {
    
    const [selectedCity, setSelectedCity] = useState(null);
    const [color, setColor] = useState(null);
    const [ingredient, setIngredient] = useState('');
    const [value, setValue] = useState(null);

    const [value1, setValue1] = useState(20);
    const [value2, setValue2] = useState(20);
    const [checked, setChecked] = useState(false);

    const cities = [
        {
            name: 'Stop ATR', code: 'ATR', 
        },
        {
            name: 'RSI', code: 'RSI', 
        },
        {
            name: 'MACD', code: 'MACD', 
        },        
        {
            name: 'SAR Parabólico', code: 'SAR',
        },
        {
            name: 'Supertrend', code: 'SUPER', 
        },
        {
            name: 'Bandas de Bollinger', code: 'BOLLINGER', 
        },
        {
            name: 'Médias Móveis das Máximas e Mínimas', code: 'MEDIA', 
        }, 
    ];

    const renderChartComponent = () => {
        if (!selectedCity) return null;

        switch (selectedCity.code) {
            case 'MACD':
                return <GraficoMacd />;
            case 'ATR':
                return <GraficoAtr />
            case 'RSI':
                return <GraficoRsi />
            case 'SAR':
                return <GraficoSar />
            case 'SUPER':
                return <GraficoSupertrendNew />
            case 'BOLLINGER':
                return <BollingerBandsArea />
            case 'MEDIA':
                return <GraficoMediasMoveis />
            default:
                return null;
        }
    };

    return ( 
        <div className='container_indi' style={{height: '100%', width: '100%'}}>
            <div className='header' style={{width: '100%'}}>
                <span style={{fontSize: '25px'}}>Selecione um indicador: </span>
                <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name" 
                checkmark={true}  highlightOnSelect={false} style={{width: '14rem'}}/>
         
            </div>


            <div className='body_1'>
                <div className='chart_config' >
                    {
                        renderChartComponent()
                    }
                </div>
                <div className='chat_config1'>
                    <div className='chart_option'>
                        <span>Cor da linha: </span>
                        <ColorPicker value={color} onChange={(e) => setColor(e.value)} />
                    </div>
                    
                    <div className='chart_option1'>
                        <span>Símbolo: </span>
                        <div className='simbolos'>
                            <RadioButton inputId="ingredient1" name="pizza" value="○" onChange={(e) => setIngredient(e.value)} checked={ingredient === '○'} />
                            <label htmlFor="ingredient2" className="ml-2">○</label>
                        </div>
                        <div className='simbolos'>
                            <RadioButton inputId="ingredient1" name="pizza" value="Δ" onChange={(e) => setIngredient(e.value)} checked={ingredient === 'Δ'} />
                            <label htmlFor="ingredient2" className="ml-2">Δ</label>
                        </div>
                        <div className='simbolos'>
                            <RadioButton inputId="ingredient1" name="pizza" value="Nenhum" onChange={(e) => setIngredient(e.value)} checked={ingredient === 'Nenhum'} />
                            <label htmlFor="ingredient2" className="ml-2">Nenhum</label>
                        </div>
                    </div>

                    <div className='chart_option2'>
                        <Checkbox onChange={e => setChecked(e.checked)} checked={checked}></Checkbox>
                        <label htmlFor="ingredient1" className="ml-2">Tracejado</label>
                    </div>
                </div>
                <div className='chart_slide'>
                    <div className='chat_config3'>
                        <div className='chart_slide'>
                            <div className='max_min' style={{width: '100%'}}> 
                                <span>0</span>
                                <span>100</span>
                            </div>
                            <Slider value={value} onChange={(e) => setValue(e.value)} className="w-14rem" />
                            <span style={{alignSelf: "center"}} >Transparência</span>
                        </div>
                    </div>

                    <div className='chat_config3'>
                        <div className='chart_slide'>
                            <div className='max_min' style={{width: '100%'}}> 
                                <span>1px</span>
                                <span>5px</span>
                            </div>
                            <Slider value={value} onChange={(e) => setValue(e.value)} className="w-14rem" />
                            <span style={{alignSelf: "center"}} >Espessura</span>
                        </div>
                    </div>
                </div>
                <div className='chart_maxMin'>
                    <span>Definir Limites</span>
                    <div className='minInput'>
                        <span>Limite Inferior</span>
                        <InputNumber value={value1} onValueChange={(e) => setValue1(e.value)} showButtons mode="decimal"  />
                    </div>
                    <div className='minInput'>
                        <span>Limite Superior</span>
                        <InputNumber value={value2} onValueChange={(e) => setValue2(e.value)} showButtons mode="decimal"  />
                    </div>
                </div>

            </div>
        </div>
    )
}