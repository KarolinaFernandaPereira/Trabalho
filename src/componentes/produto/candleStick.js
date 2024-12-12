import React, { useEffect, useState } from "react";
import EChartsReact from "echarts-for-react";
import { isElement } from "react-dom/test-utils";



export const GraficoCandleStick = ({indicador}) => {

    

    const [optionChart, setOptionChart1] = useState({})
    const [indicadores1, setIndicadores1] = useState([])
    const [key, setKey] = useState(0)

   
    

    useEffect(()=>{
      let option = {
          xAxis: {
            data: ['2024-10-24', '2024-10-25', '2024-10-26', '2024-10-27', '2024-10-28', 
                  '2024-10-29', '2024-10-30', '2024-10-31', '2024-11-01', '2024-11-02', 
                  '2024-11-03', '2024-11-04', '2024-11-05', '2024-11-06', '2024-11-07', 
                  '2024-11-08', '2024-11-09', '2024-11-10', '2024-11-11', '2024-11-12', 
                  '2024-11-13', '2024-11-14', '2024-11-15', '2024-11-16', '2024-11-17', 
                  '2024-11-18', '2024-11-19', '2024-11-20', '2024-11-21', '2024-11-22', 
                  '2024-11-23', '2024-11-24', '2024-11-25', '2024-11-26', '2024-11-27', 
                  '2024-11-28', '2024-11-29', '2024-11-30', '2024-12-01', '2024-12-02', 
                  '2024-12-03', '2024-12-04', '2024-12-05', '2024-12-06', '2024-12-07', 
                  '2024-12-08', '2024-12-09', '2024-12-10','2024-10-24', '2024-10-25', '2024-10-26', '2024-10-27', '2024-10-28', 
                  '2024-10-29', '2024-10-30', '2024-10-31', '2024-11-01', '2024-11-02', 
                  '2024-11-03', '2024-11-04', '2024-11-05', '2024-11-06', '2024-11-07', 
                  '2024-11-08', '2024-11-09', '2024-11-10', '2024-11-11', '2024-11-12', 
                  '2024-11-13', '2024-11-14', '2024-11-15', '2024-11-16', '2024-11-17', 
                  '2024-11-18', '2024-11-19', '2024-11-20', '2024-11-21', '2024-11-22', 
                  '2024-11-23', '2024-11-24', '2024-11-25', '2024-11-26', '2024-11-27', 
                  '2024-11-28', '2024-11-29', '2024-11-30', '2024-12-01', '2024-12-02', 
                  '2024-12-03', '2024-12-04', '2024-12-05', '2024-12-06', '2024-12-07', 
                  '2024-12-08', '2024-12-09', '2024-12-10'],
            lineStyle: {
              type: 'solid',
              color: "#262c30"
            }
          },
          yAxis: {
            splitLine: {
              lineStyle: {
                type: 'solid',
                color: "#262c30"
              },
          },
          min: 2150,
          interval: 50 ,
          },
          grid: {
              left: '6%',
              right: '2%',
              top: '5%',
              bottom: '6%'
          },
          tooltip: {},
          series: [
            {
              type: 'candlestick',
              data: [
                  [2300, 2291.3, 2288.26, 2308.38],
                  [2295.35, 2346.5, 2295.35, 2346.92],
                  [2347.22, 2358.98, 2337.35, 2363.8],
                  [2360.75, 2382.48, 2347.89, 2383.76],
                  [2383.43, 2385.42, 2371.23, 2391.82],
                  [2377.41, 2419.02, 2369.57, 2421.15],
                  [2425.92, 2428.15, 2417.58, 2440.38],
                  [2411, 2433.13, 2403.3, 2437.42],
                  [2432.68, 2434.48, 2427.7, 2441.73],
                  [2430.69, 2418.53, 2394.22, 2433.89],
                  [2416.62, 2432.4, 2414.4, 2443.03],
                  [2441.91, 2421.56, 2415.43, 2444.8],
                  [2420.26, 2382.91, 2373.53, 2427.07],
                  [2383.49, 2397.18, 2370.61, 2397.94],
                  [2378.82, 2325.95, 2309.17, 2378.82],
                  [2322.94, 2314.16, 2308.76, 2330.88],
                  [2320.62, 2325.82, 2315.01, 2338.78],
                  [2313.74, 2293.34, 2289.89, 2340.71],
                  [2297.77, 2313.22, 2292.03, 2324.63],
                  [2322.32, 2365.59, 2308.92, 2366.16],
                  [2364.54, 2359.51, 2330.86, 2369.65],
                  [2332.08, 2273.4, 2259.25, 2333.54],
                  [2274.81, 2326.31, 2270.1, 2328.14],
                  [2333.61, 2347.18, 2321.6, 2351.44],
                  [2340.44, 2324.29, 2304.27, 2352.02],
                  [2326.42, 2318.61, 2314.59, 2333.67],
                  [2314.68, 2310.59, 2296.58, 2320.96],
                  [2309.16, 2286.6, 2264.83, 2333.29],
                  [2282.17, 2263.97, 2253.25, 2286.33],
                  [2255.77, 2270.28, 2253.31, 2276.22],
                  [2269.31, 2278.4, 2250, 2312.08],
                  [2267.29, 2240.02, 2239.21, 2276.05],
                  [2244.26, 2257.43, 2232.02, 2261.31],
                  [2257.74, 2317.37, 2257.42, 2317.86],
                  [2318.21, 2324.24, 2311.6, 2330.81],
                  [2321.4, 2328.28, 2314.97, 2332],
                  [2334.74, 2326.72, 2319.91, 2344.89],
                  [2318.58, 2297.67, 2281.12, 2319.99],
                  [2299.38, 2301.26, 2289, 2323.48],
                  [2273.55, 2236.3, 2232.91, 2273.55],
                  [2238.49, 2236.62, 2228.81, 2246.87],
                  [2229.46, 2234.4, 2227.31, 2243.95],
                  [2234.9, 2227.74, 2220.44, 2253.42],
                  [2232.69, 2225.29, 2217.25, 2241.34],
                  [2196.24, 2211.59, 2180.67, 2212.59],
                  [2215.47, 2225.77, 2215.47, 2234.73],
                  [2224.93, 2226.13, 2212.56, 2233.04],
                  [2225.67, 2234.52, 2218.13, 2242.89],
                  [2236.11, 2250.29, 2225.44, 2255.66],
                  [2251.12, 2240.84, 2234.26, 2262.35],
                  [2245.74, 2268.92, 2239.48, 2271.12],
                  [2269.57, 2275.36, 2257.49, 2280.43],
                  [2278.68, 2290.12, 2270.52, 2294.34],
                  [2292.16, 2300.78, 2289.31, 2307.44],
                  [2305.67, 2315.92, 2298.34, 2318.55],
                  [2310.23, 2301.47, 2297.14, 2312.79],
                  [2308.84, 2322.46, 2303.11, 2330.78],
                  [2319.66, 2336.42, 2318.24, 2342.11],
                  [2338.97, 2350.28, 2334.22, 2354.89],
                  [2345.11, 2363.79, 2342.67, 2370.92],
                  [2368.45, 2378.61, 2365.33, 2385.28],
                  [2379.89, 2392.11, 2372.48, 2395.74],
                  [2387.45, 2378.36, 2368.25, 2389.41],
                  [2375.22, 2360.78, 2357.11, 2372.54],
                  [2364.89, 2380.44, 2362.45, 2390.33],
                  [2385.66, 2402.18, 2380.67, 2409.55],
                  [2404.37, 2412.89, 2398.31, 2418.77],
                  [2415.22, 2408.54, 2400.48, 2417.36],
                  [2402.36, 2386.94, 2381.67, 2409.22],
                  [2388.45, 2379.21, 2368.89, 2385.67],
                  [2377.32, 2360.94, 2355.34, 2372.28],
                  [2362.77, 2385.44, 2361.23, 2390.91],
                  [2388.12, 2398.37, 2382.45, 2404.56],
                  [2395.67, 2410.54, 2391.34, 2415.89],
                  [2408.32, 2424.89, 2403.78, 2430.56],
                  [2426.33, 2437.22, 2420.11, 2440.91],
                  [2435.88, 2428.45, 2418.56, 2439.34],
                  [2430.11, 2416.78, 2407.22, 2432.45],
                  [2419.66, 2408.34, 2398.56, 2421.28],
                  [2405.23, 2389.44, 2384.78, 2410.56],
                  [2395.67, 2386.89, 2378.45, 2392.78],
                  [2388.11, 2404.67, 2385.22, 2415.67],
                  [2402.22, 2420.78, 2398.33, 2426.89],
                  [2418.33, 2430.56, 2411.67, 2435.12],
                  [2427.89, 2442.11, 2425.67, 2448.89],
                  [2438.33, 2455.67, 2433.22, 2462.44],
                  [2450.78, 2448.11, 2437.67, 2459.33],
                  [2446.12, 2432.22, 2427.44, 2440.78],
                  [2434.22, 2420.56, 2415.22, 2430.11],
                  [2423.33, 2409.44, 2400.78, 2425.89],
                  [2411.78, 2400.67, 2392.11, 2415.67],
                  [2406.22, 2422.11, 2402.78, 2430.33],
                  [2418.11, 2436.67, 2414.33, 2440.89],
                  [2432.45, 2445.11, 2429.34, 2452.67],
                  [2440.89, 2460.56, 2437.22, 2468.11],
                  [2454.33, 2470.78, 2448.22, 2475.56],
                  [2468.45, 2465.11, 2454.33, 2473.22],
                  [2462.78, 2448.67, 2442.11, 2460.56]
              ],
              itemStyle: {
                  color: 'green',
                  color0:  'red',
                  borderColor: 'green',
                  borderColor0: 'red'
              }
            },
            {
              type: 'line',
              data: [
                  '-',
                  '-',
                  '-',
                  '-',
                  '-',
                  '-',
                  '-',
                  '-',
                  '-',
                  '-',
                  '-',
                  '-',
                  '-',
                  '-',
                  '-',
                  '-',
                  '-',
                  '-',
                  2288,2292,2287,2285,2263,2268,2248,2271, 2286, 2274, 2282, 2295, 2302, 2293, 2301, 2289, 2294,
                  2287, 2300, 2291, 2298, 2296, 2305, 2299, 2297, 2290, 2302,2288,2292,2287,2285,2263,2268,2248,2271, 2286, 2274, 2282, 2295, 2302, 2293, 2301, 2289, 2294,
                  2287, 2300, 2291,2311, 2306, 2313, 2309, 2317, 2322, 2318, 2324, 2320, 2330, 2327, 2331, 2334, 2338, 2341,
                  2349, 2346, 2344, 2352, 2357, 2361, 2368, 2365, 2370, 2374,2381, 2378, 2385, 2383, 2390,2393, 2398, 2400, 2406, 2411
              ],
              color: 'gray',
              lineStyle: {
                  width: 1,
                },
                showSymbol: false,
            },
            {
              type: 'line',
              data: [
                  '-',
                  '-',
                  '-',
                  '-',
                  '-',
                  '-',
                  '-',
                  '-',
                  '-',
                  '-',
                  '-',
                  '-',
                  '-',
                  '-',
                  '-',
                  '-',
                  '-',
                  '-',
                  2415, 2412, 2417, 2414, 2416, 2413, 2415, 2411, 2418, 2412, 2414, 2417, 2416, 2415, 2413, 2418,
                  2411, 2416, 2414, 2415, 2412, 2413, 2417, 2414, 2415, 2416, 2412, 2417, 2413, 2415, 2416, 2414, 2415, 2412, 2417, 2414, 2416, 2413, 2415, 2411, 2418, 2412, 2414, 2417, 2416, 2415, 2413, 2418,
                  2411, 2416, 2414, 2415, 2412, 2413, 2417, 2414, 2415, 2416, 2412, 2417, 2413, 2415, 2416, 2414, 2415, 2412, 2417, 2414, 2416, 2413, 2415, 2411, 2418, 2412, 2414, 2417, 2416, 2415, 2413, 2418,
                  2411, 2416, 2414, 2415, 2412, 2413, 2417, 2414, 2415, 2416, 2412, 2417, 2413, 2415, 2416, 2414
  
              ],
              color: 'gray',
              lineStyle: {
                  width: 1
              },
              showSymbol: false,
            },
            {
              type: 'line',
              data: [
                  '-',
                  '-',
                  '-',
                  '-',
                  '-',
                  '-',
                  '-',
                  '-',
                  '-',
                  '-',
                  '-',
                  '-',
                  '-',
                  '-',
                  '-',
                  '-',
                  '-',
                  '-',
                  2283, 2287, 2282, 2279, 2258, 2263, 2243, 2266, 2281, 2270, 2276, 2289, 2296, 2287, 2295, 2283, 2288,
                  2278, 2293, 2284, 2291, 2289, 2298, 2292, 2290, 2283, 2296, 2283, 2287, 2282, 2280, 2258, 2263, 2243,
                  2266, 2276, 2265, 2272, 2291, 2296, 2287, 2295, 2283, 2288, 2282, 2291, 2288, 2282, 2281, 2286, 2293,
                  2300, 2296, 2302, 2297, 2307, 2304, 2311, 2306, 2310, 2313, 2308, 2309, 2323, 2320, 2330, 2326, 2328,
                  2330, 2327, 2341, 2335, 2337, 2341, 2348, 2343, 2340, 2347, 2342, 2343, 2352, 2358, 2362, 2358, 2371
  
              ],
              color: 'white',
              lineStyle: {
                  width: 1
                },
              showSymbol: false,
            },
            {
              type: 'line',
              data: [
                2325, 2325, 2325, 2325, 2325, 2325, 2325, 2325, 2325, 2325, 2325, 2325,
                2325, 2325, 2325, 2325, 2325, 2325, 2325, 2325, 2325, 2325, 2325, 2325,
                2325, 2325, 2325, 2325, 2325, 2325, 2325, 2325, 2325, 2325, 2325, 2325,
                2325, 2325, 2325, 2325, 2325, 2325, 2325, 2325, 2325, 2325, 2325, 2325,
                2325, 2325, 2325, 2325, 2325, 2325, 2325, 2325, 2325, 2325, 2325, 2325,
                2325, 2325, 2325, 2325, 2325, 2325, 2325, 2325, 2325, 2325, 2325, 2325,
                2325, 2325, 2325, 2325, 2325, 2325, 2325, 2325, 2325, 2325, 2325, 2325,
                2325, 2325, 2325, 2325, 2325, 2325, 2325, 2325, 2325, 2325, 2325, 2325,
                2325, 2325, 2325, 2325, 2325, 2325, 2325, 2325, 2325, 2325, 2325, 2325,
                2325, 2325, 2325, 2325, 2325, 2325, 2325, 2325, 2325, 2325, 2325, 2325,
              ],
              color: 'yellow',
              lineStyle: {
                  width: 1,
                  type: "dashed",
                },
                showSymbol: false,
            },

            //Super trend
            
          ]
      };

      option.series.filter(serie => 
        indicador.some(item => 
            (item.code === 'SAR' && serie.name === 'SAR') ||
            (item.code === 'MEDIA' && (serie.name === 'Máximas' || serie.name === 'Mínimas')) ||
            (item.code === 'BOLLINGER' && serie.name === 'Preço de Fechamento') ||
            (item.code === 'SUPER' && serie.name === 'SuperTrendVermelho')
        )
      );

      setOptionChart1(option)
      setKey((prev) => prev + 2);
      if(indicador !== undefined){
        
        for(const item of indicador) {
          if(item.code === 'SAR'){
            option.series.push({
              name: "SAR",
              type: 'line',
              color: "#00ff95",
              symbol: "diamond",
              lineStyle: {
                width: 0,
              },
              smooth: true,
              symbolSize: 4,
              data: [2255, 2268, 2282, 2296, 2311, 2327, 2343, 2358, 2374, 2389, 2404, 2418,
                2450, 2426, 2402, 2378, 2354,  2330, 2322,
                '-', '-', '-', '-',
                2430, 2414, 2398, 2382, 2366, 2350, 2334, 2318, 2302, 2286,
                2250, 2266, 2275, 2280,
                2350, 2333, 2316, 2299, 2282, 2265, 2248, 2231,
                2180, 2186, 2192, 2199, 2206, 2214, 2222, 2230, 2240, 2247, 2258, 2274, 2286, 2307, 2318, 2329, 2340, 2351,
                '-','-', '-', '-', '-','-', '-', '-', '-',
                2350, 2370, 2390, 2410, 2420
               
              ],
            });
            setKey((prev) => prev + 1);

            indicadores1.push("SAR");
            setIndicadores1(indicadores1)
          } 

          if(item.code === 'MEDIA') {
            option.series.push({
              data: ['-', '-', '-', '-', '-', '-', '-', '-',  '-', '-', 2385, 2374, 2372, 2375, 2366, 2362, 2371, 2371, 2365, 2352, 2342, 2330, 2335, 2385, 2374, 2372, 2375],
              type: 'line',
              color: "blue",
              name: "Máximas",
              symbol: "circle",
              lineStyle: {
                  type: 'dashed'
                  },
              },
              {
                data: ['-', '-', '-', '-', '-', '-', '-', '-',  '-', '-', 2275, 2264, 2262, 2265, 2256, 2252, 2261, 2261, 2255, 2242, 2232, 2240, 2245, 2250, 2241, 2238, 2235],
                type: 'line',
                color: "red",
                name: "Mínimas",
                symbol: "circle",
                lineStyle: {
                    type: 'dashed',
                    width: 1
                  },
              },
              {
                  data: ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-',  '-', '-', 2274, 2271, 2270, 2265, 2260, 2270, 2258, 2250, 2241, 2238, 2235, 2264, 2261, 2260, 2255],
                  type: 'line',
                  color: "green",
                  name: "Média Móvel Máximas (20 períodos)",
                  symbol: "circle",
                  lineStyle: {
                    width: 1
                  },
              },
              {
                data: ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-',  '-', '-', 2264, 2261, 2260, 2255, 2250, 2260, 2248, 2240, 2231, 2238, 2235, 2264, 2261, 2260, 2255],
                type: 'line',
                color: "yellow",
                name: "Média Móvel Mínima (20 períodos)",
                symbol: "circle",
                lineStyle: {
                  width: 1
                },
            })

            setKey((prev) => prev + 1);

            indicadores1.push('MEDIA')
            setIndicadores1(indicadores1)
          }
          
          //Bolliger
          if(item.code === 'BOLLINGER') {
            option.series.push( {
              name: 'Preço de Fechamento',
              type: 'line',
              color: 'blue',
              lineStyle: {
                width: 1,
              },
              data: ['-', '-', '-', '-','-', '-', '-', '-',2280, 2272, 2275, 2268, 2220, 2265, 2250, 2270, 2277, 2295, 2240, 2280, 2282, 2290, 2268, 2285, 2278, 2290, 2287, 2265, 2272, 2280, 2293, 2270, 2260, 2282, 2277, 2269, 2288, 2295, 2275, 2262, 2279, 2290,
                2283, 2270, 2267, 2292, 2278, 2260, 2285, 2273, 2294, 2281, 2275, 2268, 2290, 2277, 2285, 2262, 2276, 2293, 2280, 2265,
                2289, 2278, 2267, 2284, 2291, 2270, 2263, 2295, 2282, 2279, 2266, 2288, 2275, 2261, 2290, 2287, 2274, 2269, 2283, 2294,
                2268, 2272, 2291, 2280, 2276,],
              symbol: 'none',
              
            },
            
            {
              name: 'Média Móvel Simples (SMA)',
              type: 'line',
              color: 'yellow',
              data: ['-', '-', '-', '-','-', '-', '-', '-', 2260, 2262, 2263, 2265, 2266, 2267, 2269, 2270, 2271, 2272, 2273, 2274, 2275, 2276,
                2277, 2278, 2279, 2280, 2279, 2278, 2277, 2276, 2275, 2274, 2273, 2272, 2271, 2270,
                2269, 2268, 2267, 2266, 2265, 2264, 2263, 2262, 2261, 2260, 2261, 2262, 2263, 2264,
                2265, 2266, 2267, 2268, 2269, 2270, 2271, 2272, 2273, 2274, 2275, 2276, 2277, 2278,
                2279, 2280, 2279, 2278, 2277, 2276, 2275, 2274, 2273, 2272, 2271, 2270, 2269, 2268,
              ],
              symbol: 'none',
              lineStyle: {
                width: 1,
              },
              
            },
            // Área sombreada entre as bandas
            {
              //Linha de baixo
              name: 'Banda Inferior',
              type: 'line',
              data: ['-', '-', '-', '-','-', '-', '-', '-', 2215, 2225, 2220, 2215, 2216, 2242, 2230, 2218.2, 2245, 2229, 2227, 2242,2215, 2225, 2220, 2215, 2216, 2242, 2230, 2218.2, 2245, 2229, 2227, 2242,
                2215, 2225, 2220, 2215, 2216, 2242, 2230, 2218.2, 2245, 2229, 2227, 2242,2215, 2225, 2220, 2215, 2216, 2242, 2230, 2218.2, 2245, 2229, 2227, 2242,
                2215, 2225, 2220, 2215, 2216, 2242, 2230, 2218.2, 2245, 2229, 2227, 2242,2215, 2225, 2220, 2215, 2216, 2242, 2230, 2218.2, 2245, 2229, 2227, 2242,
                2215, 2225, 2220, 2215, 2216, 2242, 2230, 
              ],
              areaStyle: {
                opacity: 0,
                color: 'red'
              },
              lineStyle: {
                type: 'dashed',
                width: 1,
              },
              symbol: 'none',
              stack: 'confidence-band',
            },
            {
              //Linha de cima
              name: 'Banda Superior',
              type: 'line',
              color: 'green',
              data: ['-', '-', '-', '-','-', '-', '-', '-', 195, 190, 195, 190, 195, 198, 192, 198, 190, 192, 198, 197, 195, 190, 195, 190, 195, 198, 192, 198, 190, 192, 198, 197,
                195, 190, 195, 190, 195, 198, 192, 198, 190, 192, 198, 197, 195, 190, 195, 190, 195, 198, 192, 198, 190, 192, 198, 197,
                195, 190, 195, 190, 195, 198, 192, 198, 190, 192, 198, 197, 195, 190, 195, 190, 195, 198, 192, 198, 190, 192, 198, 197,
                195, 190, 195, 190, 195, 190,
              ],
              areaStyle: {
                opacity: 0.2,
                color: '#73c0de'
              },
              lineStyle: {
                type: 'dashed',
                width: 1,
              },
              symbol: 'none',
              stack: 'confidence-band',
            })

            setKey((prev) => prev + 1);

            indicadores1.push('BOLLINGER')
            setIndicadores1(indicadores1)
          }

          //Supertrend
          if(item.code === 'SUPER') {
            option.series.push({
              name: "SupertrendVermelho",
              type: 'line',
              symbol: "circle",
              
              
              stack: "Total",
              color: "red",
              symbolSize: 6,
              lineStyle: {
                  width: 0,
              },
              showSymbol: false,
              emphasis: {
                  focus: 'series'
              },
              data: [2271.23, 2289.57, 2287.58, 2283.3, '-','-','-','-','-','-','-','-','-','-',  2327.7, 2394.22, 2314.4, 2315.43, 2373.53, 2370.61, 2309.17, 2308.76, 2315.01, 2389.89, 2392.03, 2308.92, 2330.86, 2359.25, 2370.1, '-','-','-','-','-','-','-','-','-','-',10, 10, 10, 8, 10, 10, 10, 12, 10, 10, 10, 14, 10,],
              inverse: true,
            },
            {
              name: "SupertrendVermelho",
              type: 'line',
              symbol: "circle",
              color: "red",
              
              areaStyle: {
                  opacity: 0.2,
              },
              stack: "Total",
              showSymbol: false,
              
              emphasis: {
                  focus: 'series'
              },
              data: [90, 90, 100, 100, '-','-','-','-','-','-','-','-','-','-', 100, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, '-','-','-','-','-','-','-','-','-','-', 75, 74, 74, 73, 71, 69, 66, 65, 63, 63, 61, 58, 54,],
              
            },
            {
              name: "SupertrendVermelho",
              type: 'line',
              symbol: "circle",
              
              
  
              stack: "total",
              
              color: "green",
              symbolSize: 6,
  
              showSymbol: false,
              
              
              emphasis: {
                  focus: 'series'
              },
              data: ['-', '-', '-', '-', 2225, 2220, 2222, 2225, 2240, 2242, 2243, 2245, 2247, 2247, '-','-','-','-','-','-','-','-','-','-','-','-','-','-','-', 2225, 2210, 2212, 2215, 2220, 2222, 2223, 2225, 2227, 2227],
              inverse: true,
            },
            {
              name: "SupertrendVermelho",
              type: 'line',
              symbol: "circle",
              color: "green",
              stack: "total", 
              areaStyle: {
                  opacity: 0.2,
              },
              
              lineStyle: {
                  width: 0,
              },
              showSymbol: false,
              
              emphasis: {
                  focus: 'series'
              },
              data: ['-', '-', '-', '-', 240, 240, 245, 240, 240, 240, 240, 240, 240, 240, '-','-','-','-','-','-','-','-','-','-','-','-','-','-','-',40, 40, 45, 40, 40, 40, 40, 40, 40, 40],
              
            })

            setKey((prev) => prev + 1);

            indicadores1.push('SUPER')
            setIndicadores1(indicadores1)
          }
          
        }
      }

      

     
      setOptionChart1(option)

      

      
    
    }, [indicador])

    
    
   
   
    return (
      <>
      
          <EChartsReact option={optionChart} key={key} />
      
      </>

    )
    
}