import LoginRoutes from "./login.route";
import fastify = require("fastify");

type Routes = fastify.RouteOptions[];

const routes: Routes = [...LoginRoutes];

export default routes;
