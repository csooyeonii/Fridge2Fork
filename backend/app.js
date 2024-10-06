const express = require('express');
const errorHandler = require('./middleware/errorHandler');
const recipeRoutes = require('./routes/recipeRoutes');

const app = express();

// Middlewares, routes, etc.
app.use('/api/recipes', recipeRoutes);

// Apply the error handler
app.use(errorHandler);

module.exports = app;