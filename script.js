let years = [];
for (let year = 1965; year <= 2023; year++) {
    years.push(year);
}

// Données de ourworldindata.org pour la dataviz n°1

let nuclearEnergyTWh = [
    25.539724, 34.43329, 41.006016, 52.113163, 61.783413, 78.87466, 109.70418,
    152.17516, 203.90158, 266.6001, 369.8482, 432.67142, 538.5478, 625.7944,
    650.8599, 711.9242, 840.75073, 912.17755, 1033.8127, 1254.5685, 1488.9216,
    1594.7357, 1734.7332, 1891.2493, 1945.0106, 2000.596, 2096.3098, 2112.223,
    2184.9646, 2225.9788, 2322.5298, 2406.615, 2390.0642, 2431.1948, 2523.7056,
    2540.46, 2613.17, 2654.78, 2601.05, 2719.41, 2726.97, 2761.59, 2703.49,
    2694.72, 2656.76, 2725.91, 2610.34, 2432.22, 2448.52, 2498.73, 2532.93,
    2571.05, 2594.23, 2658.7, 2754.08, 2648.37, 2762.24, 2639.68, 2685.74
];

let renewableEnergyTWh = [
    941.18, 1003.62, 1025.73, 1081.41, 1145.0, 1200.35, 1255.13, 1314.52,
    1335.11, 1465.52, 1483.7, 1481.93, 1532.56, 1657.68, 1741.69, 1781.38,
    1822.4, 1862.64, 1946.16, 2017.77, 2058.02, 2091.67, 2124.91, 2192.85,
    2195.17, 2279.86, 2335.4, 2344.67, 2483.06, 2504.31, 2638.94, 2677.43,
    2735.55, 2765.89, 2799.25, 2858.4, 2795.97, 2873.26, 2899.25, 3129.16,
    3279.51, 3432.46, 3540.47, 3798.13, 3879.24, 4191.63, 4394.13, 4721.16,
    5025.8, 5285.56, 5519.22, 5858.55, 6234.46, 6647.13, 7010.63, 7483.8,
    7927.13, 8484.63, 8913.9
];

let fossilFuelTWh = [
    2441.18, 2626.95, 2821.87, 3108.79, 3402.38, 3695.82, 3901.55, 4237.84,
    4602.07, 4548.22, 4641.95, 5054.53, 5234.31, 5410.12, 5630.42, 5788.33,
    5786.61, 5756.61, 5906.94, 6116.87, 6285.4736, 6439.9746, 6757.7617, 6998.179, 
    7455.736, 7614.993, 7722.592, 7807.8833, 7858.686, 8119.1626, 8335.322, 8627.022, 
    8911.184, 9214.535, 9498.733, 9878.1, 10090.26, 10520.97, 11126.3, 11564.24, 
    12126.32, 12644.06, 13468.19, 13607.04, 13405.4, 14345.73, 14952.61, 15362.46, 
    15681.07, 15965.13, 15953.64, 16233.18, 16574.46, 17094.0, 17006.52, 16522.65, 
    17480.51, 17719.19, 17879.41
];

// Données pour le dataset complet des énergies fossiles, de ourworldindata.org et visualizingenergy.org

let fossilFuelTWhBis1 = [
    2441.18, 2626.95, 2821.87, 3108.79, 3402.38, 3695.82, 3901.55, 4237.84,
    4602.07, 4548.22, 4641.95, 5054.53, 5234.31, 5410.12, 5630.42, 5788.33,
    5786.61, 5756.61, 5906.94, 6116.87
];

let fossilFuelTWhBis2 = [
    6285.4736, 6439.9746, 6757.7617, 6998.179, 7455.736, 7614.993, 7722.592, 7807.8833, 
    7858.686, 8119.1626, 8335.322, 8627.022, 8911.184, 9214.535, 9498.733, 9878.1, 
    10090.26, 10520.97, 11126.3, 11564.24, 12126.32, 12644.06, 13468.19, 13607.04, 
    13405.4, 14345.73, 14952.61, 15362.46, 15681.07, 15965.13, 15953.64, 16233.18, 
    16574.46, 17094.0, 17006.52, 16522.65, 17480.51, 17719.19, 17879.41
];

// Données de ourworldindata.org pour la dataviz n°2

let deathRate = [24.6, 18.4, 2.8, 4.6, 1.3, 0.04, 0.03, 0.02];

let greenhouseGasEmission = [970, 920, 440, 230, 24, 11, 6, 53];