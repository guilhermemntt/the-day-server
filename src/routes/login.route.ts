import { mainController } from "../controllers/login.controller";
import fastify from "fastify";

type Routes = fastify.RouteOptions[];

const routes: Routes = [
  {
    method: "GET",
    url: "/send",
    handler: mainController.send
  },
  {
    method: "GET",
    url: "/receive",
    handler: mainController.receive
  }
];

export default routes;
