"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const project_route_1 = require("../module/project/project.route");
const router = (0, express_1.Router)();
const routes = [
    {
        path: '/project',
        route: project_route_1.projectRouter,
    },
];
routes.forEach((route) => router.use(route.path, route.route));
exports.default = router;
