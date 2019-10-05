import { fastifyService } from "./services/fastify.service";
import { Service } from "./services/index.service";

const services: Service[] = [fastifyService];

(async () => {
  try {
    for (const service of services) {
      await service.init();
    }
    console.log("Server initialized.");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
})();
