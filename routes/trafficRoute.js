import express from 'express';
import { getTrafficData, addTrafficData } from '../controllers/trafficController.js';

const router = express.Router();

router.get('/stats', getTrafficData);
router.post('/add', addTrafficData);

export default router;
