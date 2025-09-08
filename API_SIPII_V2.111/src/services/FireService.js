// FireService.js
const axios = require('axios');
const FireRiskData = require('../models/FireRiskData');

// Configuración
const REPORTES_API_URL = 'http://34.28.246.100:4000/graphql';
const CHECK_INTERVAL = 300000; // 5 minutos (en milisegundos)

// Función para calcular el riesgo basado en la gravedad
function calcularRiesgo(gravedad) {
    switch(gravedad) {
        case 'Leve': return 40;
        case 'Mediano': return 65;
        case 'Grave': return 85;
        default: return 50;
    }
}

// Función principal para verificar y crear nuevos FireRiskData
async function checkAndCreateFireRiskData() {
    console.log('Iniciando verificación de nuevos reportes de incendios...');
}

// Iniciar el servicio periódico
function iniciarServicioVerificacion() {
    // Ejecutar inmediatamente al iniciar
    checkAndCreateFireRiskData();
    
    // Configurar intervalo periódico
    setInterval(checkAndCreateFireRiskData, CHECK_INTERVAL);
    console.log(`Servicio de verificación iniciado. Intervalo: ${CHECK_INTERVAL/1000} segundos`);
}

module.exports = iniciarServicioVerificacion;