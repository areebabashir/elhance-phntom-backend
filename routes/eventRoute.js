// src/routes/eventRoutes.js
import express from 'express';
import { createEvent, updateEvent, deleteEvent, getAllEvents, getEventById } from '../controllers/eventController.js';
import { uploadFields } from '../middlewares/upload.js';

const router = express.Router();

router.post('/create-event', uploadFields, createEvent);
router.put('/update-event/:id', uploadFields, updateEvent);
router.delete('/delete-event/:id', deleteEvent);
router.get('/all-events', getAllEvents);
router.get('/event/:id', getEventById);

export default router;
