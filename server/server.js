import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import compression from 'compression';
import helmet from 'helmet';
import connectDB from './configs/db.js';
import adminRouter from './routes/adminRoutes.js';
import blogRouter from './routes/blogRoutes.js';

const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use(compression()); // Gzip compression
app.use(helmet());      // Secure headers

// Connect to DB
await connectDB();

// Routes
app.get('/', (req, res) => res.send("API is Working"));
app.use('/api/admin', adminRouter);
app.use('/api/blog', blogRouter);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

export default app;
