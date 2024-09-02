// HorizontalRulerChart.js
import React from 'react';
import { Scatter } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, LinearScale, PointElement, SubTitle } from 'chart.js';
import "./Semana.css"

ChartJS.register(Title, Tooltip, Legend, LinearScale, PointElement);

const HorizontalRulerChart = () => {
  
  const data = {
    datasets: [
      {
        label: 'Valores',
        data: [
          { x: 82, y: 1 },
        ],
        backgroundColor: 'white',
        borderColor: 'black',
        borderWidth: 1,
        pointRadius: 5,
        pointHoverRadius: 7,
        pointBackgroundColor: 'white',
        pointBorderColor: 'black'
      },
      {
        label: 'Valores',
        data: [
          { x: 75, y: 1 },
        ],
        backgroundColor: 'red',
        borderColor: 'black',
        borderWidth: 1,
        pointRadius: 5,
        pointHoverRadius: 7,
        pointBackgroundColor: 'red',
        pointBorderColor: 'black'
      },
    ]
  };

  const data2 = {
    datasets: [
      {
        label: 'Valores',
        data: [
          { x: 67.5, y: 1 },
        ],
        backgroundColor: 'white',
        borderColor: 'black',
        borderWidth: 1,
        pointRadius: 5,
        pointHoverRadius: 7,
        pointBackgroundColor: 'white',
        pointBorderColor: 'black'
      }
    ]
  };
  

  const data3 = {
    datasets: [
      {
        label: 'Valores',
        data: [
          { x: 114, y: 1 },
         
        ],
        backgroundColor: 'red',
        borderColor: 'black',
        borderWidth: 1,
        pointRadius: 5,
        pointHoverRadius: 7,
        pointBackgroundColor: 'red',
        pointBorderColor: 'black'
      },
      {
        label: 'Valores',
        data: [
            { x: 115, y: 1 },
         
        ],
        backgroundColor: 'white',
        borderColor: 'black',
        borderWidth: 1,
        pointRadius: 5,
        pointHoverRadius: 7,
        pointBackgroundColor: 'white',
        pointBorderColor: 'black'
      },
      
    ]
  };

  const data4 = {
    datasets: [
      {
        label: 'Valores',
        data: [
          { x: 78, y: 1 },
        ],
        backgroundColor: 'white',
        borderColor: 'black',
        borderWidth: 1,
        pointRadius: 5,
        pointHoverRadius: 7,
        pointBackgroundColor: 'white',
        pointBorderColor: 'black'
      }
    ]
  };


  const data5 = {
    datasets: [
      {
        label: 'Valores',
        data: [
          { x: 100, y: 1 },
        ],
        backgroundColor: 'white',
        borderColor: 'black',
        borderWidth: 1,
        pointRadius: 5,
        pointHoverRadius: 7,
        pointBackgroundColor: 'white',
        pointBorderColor: 'black'
      }
    ]
  };


   
  const data6 = {
    datasets: [
      {
        label: 'Valores',
        data: [
          { x: 78, y: 1 },
        ],
        backgroundColor: 'red',
        borderColor: 'black',
        borderWidth: 1,
        pointRadius: 5,
        pointHoverRadius: 7,
        pointBackgroundColor: 'red',
        pointBorderColor: 'black'
      },
      {
        label: 'Valores',
        data: [
            { x: 81, y: 1 },
        ],
        backgroundColor: 'white',
        borderColor: 'black',
        borderWidth: 1,
        pointRadius: 5,
        pointHoverRadius: 7,
        pointBackgroundColor: 'white',
        pointBorderColor: 'black'
      },
      {
        label: 'Valores',
        data: [
            { x: 83, y: 1 },
        ],
        backgroundColor: 'gray',
        borderColor: 'black',
        borderWidth: 1,
        pointRadius: 5,
        pointHoverRadius: 7,
        pointBackgroundColor: 'gray',
        pointBorderColor: 'black'
      },      
      
      
    ]
  };

  const data7 = {
    datasets: [
      {
        label: 'Valores',
        data: [
          { x: 65.5, y: 1 },
        ],
        backgroundColor: 'white',
        borderColor: 'black',
        borderWidth: 1,
        pointRadius: 5,
        pointHoverRadius: 7,
        pointBackgroundColor: 'white',
        pointBorderColor: 'black'
      }
    ]
  };
  

  const data8 = {
    datasets: [
      {
        label: 'Valores',
        data: [
          { x: 114, y: 1 },
        ],
        backgroundColor: 'red',
        borderColor: 'black',
        borderWidth: 1,
        pointRadius: 5,
        pointHoverRadius: 7,
        pointBackgroundColor: 'red',
        pointBorderColor: 'black'
      },
      {
        label: 'Valores',
        data: [
          { x: 117, y: 1 },
        ],
        backgroundColor: 'white',
        borderColor: 'black',
        borderWidth: 1,
        pointRadius: 5,
        pointHoverRadius: 7,
        pointBackgroundColor: 'white',
        pointBorderColor: 'black'
      },
      {
        label: 'Valores',
        data: [
          { x: 118, y: 1 },
        ],
        backgroundColor: 'gray',
        borderColor: 'black',
        borderWidth: 1,
        pointRadius: 5,
        pointHoverRadius: 7,
        pointBackgroundColor: 'gray',
        pointBorderColor: 'black'
      }
    ]
  };

  const data9 = {
    datasets: [
      {
        label: 'Valores',
        data: [
          { x: 75, y: 1 },

        ],
        backgroundColor: 'red',
        borderColor: 'black',
        borderWidth: 1,
        pointRadius: 5,
        pointHoverRadius: 7,
        pointBackgroundColor: 'red',
        pointBorderColor: 'black'
      },
      {
        label: 'Valores',
        data: [
          { x: 82, y: 1 },

        ],
        backgroundColor: 'white',
        borderColor: 'black',
        borderWidth: 1,
        pointRadius: 5,
        pointHoverRadius: 7,
        pointBackgroundColor: 'white',
        pointBorderColor: 'black'
      }
    ]
  };


  const data10 = {
    datasets: [
      {
        label: 'Valores',
        data: [
          { x: 100, y: 1 },
          
        ],
        backgroundColor: 'red',
        borderColor: 'black',
        borderWidth: 1,
        pointRadius: 5,
        pointHoverRadius: 7,
        pointBackgroundColor: 'red',
        pointBorderColor: 'black'
      },
      {
        label: 'Valores',
        data: [
          { x: 108, y: 1 },

        ],
        backgroundColor: 'white',
        borderColor: 'black',
        borderWidth: 1,
        pointRadius: 5,
        pointHoverRadius: 7,
        pointBackgroundColor: 'white',
        pointBorderColor: 'black'
      }
    ]
  };


  const options2 = {
    plugins: {
      legend: {
        display: false
      },
      responsive: true,
      
      tooltip: {
        callbacks: {
          label: function (context) {
            return `Valor: ${context.raw.x}`;
          }
        }
      }
    },
    scales: {
      x: {
        title: {
          display: false,
          text: 'Valor'
        },
        ticks: {
          stepSize: 0.5
        }
      },
      y: {
        display: true,
        min: 0,
        max: 2,
        ticks: {
            display: false
          }
      }
    }
  };

  const options = {
    plugins: {
      legend: {
        display: false
      },
      
      tooltip: {
        callbacks: {
          label: function (context) {
            return `Valor: ${context.raw.x}`;
          }
        }
      }
    },
    scales: {
      x: {
        title: {
          display: false,
          text: 'Valor'
        },
        ticks: {
          stepSize: 1,
          max: 100
        }
      },
      y: {
        display: true,
        min: 0,
        max: 2,
        ticks: {
            display: false
          }
      }
    }
  };

  const options3 = {
    plugins: {
      legend: {
        display: false
      },
      responsive: true,
      tooltip: {
        callbacks: {
          label: function (context) {
            return `Valor: ${context.raw.x}`;
          }
        }
      }
    },
    scales: {
      x: {
        title: {
          display: false,
          text: 'Valor'
        },
        ticks: {
          stepSize: 2
        }
      },
      y: {
        display: true,
        min: 0,
        max: 2,
        ticks: {
            display: false
          }
      }
    }
  };

  const options4 = {
    plugins: {
      legend: {
        display: false
      },
      responsive: true,
      tooltip: {
        callbacks: {
          label: function (context) {
            return `Valor: ${context.raw.x}`;
          }
        }
      }
    },
    scales: {
      x: {
        title: {
          display: false,
          text: 'Valor'
        },
        ticks: {
          stepSize: 0.2,
          max: 100
        }
      },
      y: {
        display: true,
        min: 0,
        max: 2,
        ticks: {
            display: false
          }
      }
    }
  };

  return (
    <div className='container'>
        <div className='resumo'>
            <span>Resumo do Dia</span>
            <div className='scatterBox'>
                <span className='spanChart' style={{paddingRight: '55px'}}>SE CON MEN DEZ/23</span>
                <Scatter data={data} options={options} className='chart'/>
            </div>
            <div className='scatterBox'>
                <span className='spanChart' >SE CON TRI ABR/24 JUN/24</span>
                <Scatter data={data2} options={options2} />
            </div>
            <div className='scatterBox'>
                <span className='spanChart' >SE CON ANU JAN/26 DEZ/26</span>
                <Scatter data={data3} options={options4} />
            </div>
            <div className='scatterBox'>
                <span className='spanChart' style={{paddingRight: '55px'}}>SE CON MEN DEZ/23</span>
                <Scatter data={data4} options={options} />
            </div>
            <div className='scatterBox'>
                <span className='spanChart' >SE CON ANU JAN/25 DEZ/25</span>
                <Scatter data={data5} options={options3} />
            </div>
        </div>
        <div className='resumo'>
            <span>Resumo da Semana</span>
            <div className='scatterBox'>        
                <span className='spanChart' style={{paddingRight: '55px'}}>SE CON MEN DEZ/23</span>
                <Scatter data={data6} options={options} className='chart'/>
            </div>
            <div className='scatterBox'>
                <span className='spanChart' >SE CON TRI ABR/24 JUN/24</span>
                <Scatter data={data7} options={options2} />
            </div>
            <div className='scatterBox'>
                <span className='spanChart' >SE CON ANU JAN/26 DEZ/26</span>
                <Scatter data={data8} options={options2} />
            </div>
            <div className='scatterBox'>
                <span className='spanChart' >SE CON SEM JUL/24 DEZ/24</span>
                <Scatter data={data9} options={options2} />
            </div>
            <div className='scatterBox'>
                <span className='spanChart' >SE CON ANU JAN/25 DEZ/25</span>
                <Scatter data={data10} options={options2} />
            </div>
        </div>
    </div>
    

    
  );
};

export default HorizontalRulerChart;
