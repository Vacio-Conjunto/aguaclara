/** @type {import('next').NextConfig} */

// Se agregó estos cambios para poder realizar pruebas en
// dispositivos conectados en la misma red
// Igual se cambió el package.json
module.exports = {
  serverRuntimeConfig: {
    // Add server-specific configuration here
    // Example: host and port
    MY_HOST: '0.0.0.0',
    MY_PORT: 3000,
  },
  publicRuntimeConfig: {
    // Add public configuration here
  },
};

