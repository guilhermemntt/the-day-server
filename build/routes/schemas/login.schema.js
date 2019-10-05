"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var states_1 = __importDefault(require("../../util/states"));
var loginTypes_1 = __importDefault(require("../../util/loginTypes"));
var index_schema_1 = require("./index.schema");
var register = {
    body: {
        type: "object",
        required: [
            "id",
            "name",
            "surname",
            "email",
            "password",
            "phone",
            "rg",
            "zipCode",
            "number",
            "place",
            "city",
            "state",
            "country"
        ],
        properties: {
            id: {
                type: "string",
                nullable: false,
                pattern: "^[0-9]*$",
                minLength: 11,
                maxLength: 11
            },
            name: {
                type: "string",
                nullable: false,
                maxLength: 30
            },
            surname: {
                type: "string",
                nullable: false,
                maxLength: 60
            },
            email: {
                type: "string",
                nullable: false,
                maxLength: 100,
                lowercase: true,
                format: "email"
            },
            password: { type: "string", nullable: false, maxLength: 200 },
            phone: {
                type: "string",
                nullable: false,
                pattern: "^[0-9]*$",
                minLength: 10,
                maxLength: 11
            },
            rg: { type: "string", nullable: false, maxLength: 15 },
            zipCode: {
                type: "string",
                nullable: false,
                minLength: 8,
                maxLength: 8
            },
            number: { type: "integer", nullable: false },
            place: { type: "string", nullable: false, maxLength: 45 },
            neighborhood: { type: "string", nullable: true, maxLength: 45 },
            city: { type: "string", nullable: false, maxLength: 45 },
            state: { type: "string", enum: states_1.default, nullable: false },
            country: { type: "string", nullable: false, maxLength: 45 },
            complement: { type: "string", nullable: true, maxLength: 45 },
            lat: { type: "number", nullable: false },
            lon: { type: "number", nullable: false },
            loginType: { type: "string", enum: loginTypes_1.default, nullable: false }
        }
    },
    response: {
        200: {
            description: "Insert a new user.",
            type: "object",
            properties: {
                id: {
                    type: "string",
                    minLength: 11,
                    maxLength: 11,
                    nullable: false
                },
                accessToken: {
                    type: "string",
                    minLength: 36,
                    maxLength: 36,
                    nullable: false
                }
            }
        },
        400: index_schema_1._400errorDescription,
        500: index_schema_1._500errorDescription
    }
};
var login = {
    body: {
        type: "object",
        required: ["loginType", "email"],
        properties: {
            loginType: { type: "string", enum: loginTypes_1.default, nullable: false },
            email: {
                type: "string",
                nullable: false,
                maxLength: 100,
                lowercase: true,
                format: "email"
            },
            password: { type: "string", nullable: true, maxLength: 200 }
        }
    },
    response: {
        200: {
            description: "Login user.",
            type: "object",
            properties: {
                accessToken: {
                    type: "string",
                    minLength: 36,
                    maxLength: 36,
                    nullable: false
                }
            }
        },
        401: index_schema_1._401errorDescription,
        500: index_schema_1._500errorDescription
    }
};
var loginSchema = {
    register: register,
    login: login
};
exports.loginSchema = loginSchema;
