const swaggerAutogen = require('swagger-autogen')

const doc = {
    info: {
        version: "1.0.0",
        title: 'Minha API',
        description: 'Projeto de Gerenciamento de Atividades',
    },
    host: 'localhost:3000', // Substitua pelo host correto
    
};

const outputfile = './swagger.json'
const endpointsfiles = ['./index.js']

swaggerAutogen(outputfile, endpointsfiles, doc).then(() => {
    require('./index');           // Your project's root file
});