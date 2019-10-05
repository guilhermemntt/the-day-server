"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_schema_1 = require("./index.schema");
// const add: fastify.RouteSchema = {
//   body: {
//     type: "object",
//     required: [
//       "autoRental",
//       "description",
//       "price",
//       "enable",
//       "advertiser",
//       "title",
//       "cover",
//       "subcategories",
//       "adImages",
//       "recurrentDays",
//       "rentalRequests",
//       "days",
//       "users"
//     ],
//     properties: {
//       autoRental: {
//         type: "boolean",
//         nullable: false
//       },
//       description: {
//         type: "string",
//         nullable: false,
//         maxLength: 800
//       },
//       price: {
//         type: "number",
//         nullable: false
//       },
//       enable: {
//         type: "boolean",
//         nullable: false
//       },
//       advertiser: { type: "object", nullable: false },
//       title: {
//         type: "string",
//         nullable: false,
//         maxLength: 45
//       },
//       cover: { type: "string", nullable: false, maxLength: 36 },
//       subcategories: {
//         type: "object",
//         nullable: false
//       },
//       adImages: { type: "array", nullable: false },
//       recurrentDays: { type: "array", nullable: false },
//       rentalRequests: { type: "array", nullable: false },
//       days: { type: "array", nullable: false },
//       users: { type: "array", nullable: false },
//     }
//   },
//   response: {
//     200: {
//       description: "Insert a new advertisement.",
//       type: "object",
//       properties: {
//         id: {
//           type: "string"
//         },
//         title: {
//           type: "string",
//           nullable: false,
//           maxLength: 45
//         }
//       }
//     },
//     400: _400errorDescription,
//     500: _500errorDescription
//   }
// };
var favorite = {
    body: {
        type: "object",
        required: ["id"],
        properties: {
            id: {
                type: "string",
                nullable: false
            }
        }
    },
    response: {
        200: {
            description: "Favorited/Unfavorited",
            type: "object",
            properties: {
                id: {
                    type: "string"
                },
                title: {
                    type: "string",
                    nullable: false,
                    maxLength: 45
                }
            }
        },
        400: index_schema_1._400errorDescription,
        500: index_schema_1._500errorDescription
    }
};
var findOne = {
    params: {
        type: "object",
        required: ["id"],
        properties: {
            id: {
                type: "string",
                nullable: false
            }
        }
    },
    response: {
        200: {
            description: "Found Ad by ID",
            type: "object",
            properties: {
                id: {
                    type: "string"
                },
                title: {
                    type: "string",
                    nullable: false,
                    maxLength: 45
                }
            }
        },
        400: index_schema_1._400errorDescription,
        500: index_schema_1._500errorDescription
    }
};
var get = {
    body: {
        type: "object",
        properties: {
            lat: {
                type: "string",
                nullable: false
            }
        }
    },
    response: {
        200: {
            description: "Favorited/Unfavorited",
            type: "object",
            properties: {
                id: {
                    type: "string"
                },
                title: {
                    type: "string",
                    nullable: false,
                    maxLength: 45
                }
            }
        },
        400: index_schema_1._400errorDescription,
        500: index_schema_1._500errorDescription
    }
};
var advertisementSchema = {
    // add,
    // update,
    favorite: favorite,
    findOne: findOne,
    get: get
};
exports.advertisementSchema = advertisementSchema;
