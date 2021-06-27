require('dotenv').config();
const Hapi = require('@hapi/hapi');
const SongsService = require('./src/services/postgres/SongsService');
const SongsValidator = require('./src/validator/songs');

const init = async () => {
  const server = Hapi.server({
    port: process.env.PORT,
    host: process.env.HOST,
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });
  await server.register({
    plugin: SongsService,
    validator: SongsValidator,
  });

  await server.start();
  console.log(`Server berjalan pada ${server.indo.uri}`);
};

init();
