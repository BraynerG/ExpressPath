"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ExpressPath = function (pathsFolder) { return function (req, res, next) {
    try {
        var source = require(pathsFolder + req.path);
        if (source)
            return source(req, res, next);
        res.sendStatus(404);
    }
    catch (error) {
        res.sendStatus(404);
    }
}; };
exports.default = ExpressPath;
