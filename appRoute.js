import express from "express";
const router = express.Router()

//import controllers
import * as contactController from './controller/contactController'

//import middlewares
import asyncHandler from "./middlewares/asyncHandler";

export function appRoute(app) {
    router.get('/home', asyncHandler(contactController.find))

    app.use('/api/', router);
}