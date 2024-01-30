const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const usersRouter = require('./routers/usersRouter');
const transactionRouter = require('./routers/transactionRouter');
const ordersRouter = require('./routers/ordersRouter');
const reviewsRouter = require('./routers/reviewsRouter');
const productsRouter = require('./routers/productsRouter');


const app = express();

app.use(express.json({
    type: ['application/json', 'text/plain']
}));
app.use(morgan('dev'));
app.use(cors());

app.use('/api/v1/users', usersRouter);
app.use('/api/v1/orders', ordersRouter);
app.use('/api/v1/products', productsRouter);
app.use('/api/v1/reviews', reviewsRouter);
app.use('/api/v1/transaction', transactionRouter);

module.exports = app;
