const swaggerAutogen = require('swagger-autogen')();

const outputFile = './swagger_output.json';
const endpointsFiles = ['server/routes/*.js'];

swaggerAutogen(outputFile, endpointsFiles);
