import express from 'express';
import connectDB from './config/db.js';
import cors from 'cors';
import bodyParser from 'body-parser';
import formRoutes from './routes/formRoute.js';
import authRoutes from './routes/authRoute.js';
import eventRoutes from './routes/eventRoute.js';
import contactRoutes from './routes/contactRoute.js';
import trafficRoutes from './routes/trafficRoute.js';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

dotenv.config();

// Define __dirname for ES Module context
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Database configuration
connectDB();

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

// Serve static files from the 'uploads' directory
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Routes
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/form', formRoutes);
app.use('/api/v1/event', eventRoutes);
app.use('/api/v1/contact', contactRoutes);
app.use('/api/v1/traffic', trafficRoutes);

// Test API endpoint
app.get('/', (req, res) => {
  res.send('<h1>Welcome to ecommerce app</h1>');
});

// Export the app
export default app;
