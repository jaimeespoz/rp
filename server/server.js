// https://www.youtube.com/watch?v=ZGymN8aFsv4&t=300s
const express = require('express');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
require('dotenv').config();
const errorHandler = require('../middleware/error');

const PORT = process.env.PORT || 3000;

const app = express();

// Rate limiting
const limiter = rateLimit({
	WindowMs: 10 * 60 * 1000, // 10 minutos
	max: 100,
});
app.use(limiter);
app.set('trust proxy', 1);

// Enable cors
// app.use(cors());
app.use(
	cors({
		origin: 'http://127.0.0.1:3000',
		methods: ['GET', 'PUT'],
		credentials: true,
	})
);

// Set static folder
app.use(express.static('public'));

// Routes
app.use('/api', require('../routes/index'));

// Error handler middleware
app.use(errorHandler);

app.listen(PORT, () => {
	console.log(`Server ir running on port ${PORT}`);
});
