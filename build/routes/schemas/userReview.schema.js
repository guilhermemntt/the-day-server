"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_schema_1 = require("./index.schema");
var add = {
    body: {
        type: "object",
        required: ["rating", "message", "rentalRequestId"],
        properties: {
            rating: {
                type: "number",
                nullable: false
            },
            message: {
                type: "string",
                nullable: false,
                maxLength: 500
            },
            rentalRequestId: {
                type: "number",
                nullable: false
            }
        }
    },
    response: {
        200: {
            description: "Insert a new review.",
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
var find = {
    params: {
        type: "object",
        required: ["renterId, lenderId"],
        properties: {
            renterId: {
                type: "string",
                nullable: false
            },
            lenderId: {
                type: "string",
                nullable: false
            }
        }
    },
    response: {
        200: {
            description: "Find userReview",
            type: "object",
            properties: {
                renterId: {
                    type: "string",
                    nullable: false
                },
                lenderId: {
                    type: "string",
                    nullable: false
                }
            }
        },
        400: index_schema_1._400errorDescription,
        500: index_schema_1._500errorDescription
    }
};
var getByRenter = {
    params: {
        type: "object",
        required: ["renterId", "offset"],
        properties: {
            renterId: {
                type: "string",
                nullable: false
            },
            offset: {
                type: "number",
                nullable: false
            }
        }
    }
};
var average = {
    params: {
        type: "object",
        required: ["renterId"],
        properties: {
            renterId: {
                type: "string",
                nullable: false
            }
        }
    }
};
var userReviewSchema = {
    add: add,
    find: find,
    getByRenter: getByRenter,
    average: average
};
exports.userReviewSchema = userReviewSchema;
