// src/routes/formRoute.js
import { Router } from 'express';
import { submitForm, getAllResponses } from '../controllers/formController.js';

const router = Router();

router.post('/submit-form', submitForm);
router.get('/all-responses', getAllResponses); // New route to get all responses

export default router;
