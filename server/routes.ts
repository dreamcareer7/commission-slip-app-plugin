import express from 'express'

import homeRoute from './app/controllers/home'
import dataRoute from './app/controllers/data'
import manifestRoute from './app/controllers/manifest'

const router = express.Router()

router.get('/', homeRoute)

router.get('/data', dataRoute.getDealData);
router.post('/deal-data/insert', dataRoute.insertData);
/**
 * Please don't remove this route
 */
router.get('/manifest.json', manifestRoute)

export default router
