"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_schema_1 = require("./index.schema");
var findAll = {
    params: {
        type: "object",
        required: ["name"],
        properties: {
            name: {
                type: "string",
                nullable: false,
            }
        }
    },
    response: {
        200: {
            description: "Fetch categories",
            type: "object",
            properties: {
                id: {
                    type: "string",
                    nullable: false
                },
            }
        },
        400: index_schema_1._400errorDescription,
        500: index_schema_1._500errorDescription
    }
};
var categorySchema = {
    findAll: findAll
};
exports.categorySchema = categorySchema;
