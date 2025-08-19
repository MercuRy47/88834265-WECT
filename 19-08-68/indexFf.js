const fastifyFactory = require('fastify');
const dotenv = require('dotenv');

dotenv.config();

const PORT = Number(process.env.PORT) || 3000;

const fastify = fastifyFactory({ logger: true });

fastify.get('/', async (request, reply) => {
  return 'Fastify server is running';
});

fastify.get('/titles', async (request, reply) => {
  return 'Get all titles';
});

fastify.get('/title/:id', async (request, reply) => {
  const { id } = request.params;
  return `Get title with ID: ${id}`;
});

fastify.post('/title', async (request, reply) => {
  return 'Create a new title';
});

fastify.put('/title/:id', async (request, reply) => {
  const { id } = request.params;
  return `Update title with ID: ${id}`;
});

fastify.delete('/title/:id', async (request, reply) => {
  const { id } = request.params;
  return `Delete title with ID: ${id}`;
});

const start = async () => {
  try {
    await fastify.listen({ port: PORT });
    fastify.log.info(`Server listening at http://localhost:${PORT}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();