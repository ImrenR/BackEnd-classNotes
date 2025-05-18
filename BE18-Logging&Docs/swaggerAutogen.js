'use strict'

//npm i swagger-autogen

const swaggerAutogen = require('swagger-autogen')()

const packageJson= require('./package.json');
const HOST = process.env?.HOST || '127.0.0.1'
const PORT = process.env?.PORT || 8000
const document = {
   info:{
    version:packageJson.version,
    title:packageJson.title,
    description:packageJson.description,
    contact:packageJson.contact,
    licence:packageJson.license,
   },
   host: HOST + ':' + 'PORT',
   basePath: '/',
   schemes: ['http', 'https'],
   securityDefinitions:{
    Token:{
      type:'basicKey',
      in:'header',
      name:'Authorization',
      description:'Simple Token Authentication',
    }
   },
   security: [{Token:[]}],
   definitions : {
    'Departments': require('./src/models/department').schema.obj,
    'Personnel': require('./src/models/personnel').schema.obj
   }
};
// to run swaggerAutogen: node swaggerAutogen.js
swaggerAutogen('./src/configs/swagger.json',['./index.js'], document);