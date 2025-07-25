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

    router.get('/contacts/favorite', asyncHandler(contactController.findFavorite))
    
    router.get('/contacts/:_id', asyncHandler(contactController.findByPk))
    
    router.put('/contacts/:_id', asyncHandler(contactController.update))
    
    router.delete('/contacts/:_id', asyncHandler(contactController.deleteById))

    app.use('/api/', router);
}