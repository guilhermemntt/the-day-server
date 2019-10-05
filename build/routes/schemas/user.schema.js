"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var loginTypes_1 = __importDefault(require("../../util/loginTypes"));
var states_1 = __importDefault(require("../../util/states"));
var index_schema_1 = require("./index.schema");
var findOne = {
    params: {
        type: "object",
        required: ["id"],
        properties: {
            id: {
                type: "string",
                nullable: false,
                pattern: "^[0-9]*$",
                minLength: 11,
                maxLength: 11
            }
        }
    },
    response: {
        200: {
            description: "Found user by ID",
            type: "object",
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
                // password: { type: "string", nullable: false, maxLength: 200 },
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
                loginType: { type: "string", enum: loginTypes_1.default, nullable: false },
                createdAt: { type: "string", nullable: false },
                updatedAt: { type: "string", nullable: false },
                condominiumId: {
                    type: "string",
                    nullable: false,
                    pattern: "^[0-9]*$",
                    minLength: 11,
                    maxLength: 11
                }
            }
        },
        400: index_schema_1._400errorDescription,
        500: index_schema_1._500errorDescription
    }
};
var confirm = {
    params: {
        type: "object",
        required: ["hash"],
        properties: {
            hash: {
                type: "string",
                nullable: false
            }
        }
    },
    response: {
        200: {
            description: "Insert a new user.",
            type: "object",
            properties: {
                hash: {
                    type: "string",
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
var update = {
    body: {
        type: "object",
        required: ["id"],
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
var forgotPassword = {
    params: {
        type: "object",
        required: ["email"],
        properties: {
            email: {
                type: "string",
                nullable: false
            }
        }
    },
    response: {
        200: {
            description: "Insert a new user.",
            type: "object",
            properties: {
            // hash: {
            //   type: "string",
            //   nullable: false
            // },
            // accessToken: {
            //   type: "string",
            //   minLength: 36,
            //   maxLength: 36,
            //   nullable: false
            // }
            }
        },
        400: index_schema_1._400errorDescription,
        500: index_schema_1._500errorDescription
    }
};
var userSchema = {
    findOne: findOne,
    confirm: confirm,
    update: update,
    forgotPassword: forgotPassword
};
exports.userSchema = userSchema;
