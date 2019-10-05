import fastify from "fastify";

let requests = 0;

interface mainController {
  send: fastify.RequestHandler;
  receive: fastify.RequestHandler;
}

let mainController: mainController = {
  send: async (request, reply) => {
    try {
      requests++;
      reply.code(200).send(requests);
    } catch (error) {
      console.log(error);
      throw error;
    }
  },
  receive: async (request, reply) => {
    try {
      reply.code(200).send(requests);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
};

export { mainController };
