const swaggerAuto = require('swagger-autogen')();

const doc = {
    info: {
        title: 'temples API',
        description: 'An API to display temples information from the church of Jesus Christ of Latter Day Saints.'
    },
    host: 'localhost:8080',
    schemes: ['http']
}

const outputFile = './swagger.json';
const routes = ['./routes/index.js'];

swaggerAuto(outputFile, routes, doc);