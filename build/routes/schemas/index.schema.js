"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var errorDescription = {
    type: "object",
    properties: {
        statusCode: {
            type: "integer",
            nullable: false
        },
        code: {
            type: "integer",
            nullable: false
        },
        error: {
            type: "string",
            nullable: false
        },
        msg: {
            type: "string",
            nullable: false
        }
    }
};
var _400errorDescription = __assign({ description: "Missing attributes or already exists unique attribute." }, errorDescription);
exports._400errorDescription = _400errorDescription;
var _401errorDescription = __assign({ description: "Access without valid accessToken." }, errorDescription);
exports._401errorDescription = _401errorDescription;
var _500errorDescription = __assign({ description: "Internal server error." }, errorDescription);
exports._500errorDescription = _500errorDescription;
