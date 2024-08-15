import express from 'express';
import { createContact, getAllContacts, getContactById, deleteContact } from '../controllers/contactController.js';

const router = express.Router();

router.post('/contactus', createContact);
router.get('/allcontacts', getAllContacts);
router.get('/:id', getContactById);
router.delete('/:id', deleteContact); // Added route for deleting contact

export default router;
