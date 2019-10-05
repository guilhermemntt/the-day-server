import fastify from "fastify";
import { Server, IncomingMessage, ServerResponse } from "http";
import routes from "../routes/index.route";
import { AddressInfo } from "net";
import { Service } from "./index.service";

const fastifyService: Service = {
  init: async () => {
    try {
      const server: fastify.FastifyInstance<
        Server,
        IncomingMessage,
        ServerResponse
      > = fastify({});

      routes.forEach(route => {
        server.route(route);
      });

      await server.listen(3000);

      console.log(
        `Fastify service initialized on port ${
          (server.server.address() as AddressInfo).port
        }.`
      );
    } catch (error) {
      throw error;
    }
  }
};

export { fastifyService };
