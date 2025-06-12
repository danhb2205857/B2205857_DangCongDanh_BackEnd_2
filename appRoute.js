import express from "express";
const router = express.Router()

//import controllers
import * as contactController from './controller/contactController'

//import middlewares
import asyncHandler from "./middlewares/asyncHandler";

export function appRoute(app) {
    router.get('/contacts', asyncHandler(contactController.findAll))

    router.post('/contacts', asyncHandler(contactController.create))

    router.delete('/contacts', asyncHandler(contactController.deleteAll))
    
    app.use('/api/', router);
}