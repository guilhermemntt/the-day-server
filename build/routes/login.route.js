"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const login_controller_1 = require("../controllers/login.controller");
const routes = [
    {
        method: "GET",
        url: "/send",
        handler: login_controller_1.mainController.send
    },
    {
        method: "GET",
        url: "/receive",
        handler: login_controller_1.mainController.receive
    }
];
exports.default = routes;
