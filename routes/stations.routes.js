import express from "express";
import { getStations } from '../controller/Stations.controller.js'

const router = express.Router();

router.get('/', getStations);

export default router;