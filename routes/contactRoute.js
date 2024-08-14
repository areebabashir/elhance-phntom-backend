// routes/contactRoutes.js
import express from 'express';
import { createContact, getAllContacts, getContactById } from '../controllers/contactcontroller.js';

const router = express.Router();

router.post('/contactus', createContact);
router.get('/allcontacts', getAllContacts);
router.get('/:id', getContactById);

export default router;
