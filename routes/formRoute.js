// src/routes/formRoute.js
import { Router } from 'express';
import { submitForm, getAllResponses, deleteForm } from '../controllers/formController.js'; // Import deleteForm

const router = Router();

router.post('/submit-form', submitForm);
router.get('/all-responses', getAllResponses); // Route to get all responses
router.delete('/responses/:id', deleteForm); // New route to delete a form response by ID

export default router;
