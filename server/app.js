const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const usersRouter = require('./routers/usersRouter');
const ordersRouter = require('./routers/ordersRouter');
const reviewsRouter = require('./routers/reviewsRouter');
const productsRouter = require('./routers/productsRouter');


const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

app.use('/api/v1/users', usersRouter);
// app.use('/api/v1/orders', ordersRouter);
// app.use('/api/v1/products', productsRouter);
// app.use('/api/v1/reviews', reviewsRouter);

module.exports = app;
