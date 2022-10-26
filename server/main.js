const express = require('express');
const cors = require('cors');
const bp = require("body-parser");
const dotenv = require('dotenv').config()
const { errorHandler } = require('./middleware/errorMiddleware');


// routers files
const usersRouter = require('./router/usersRouter');
const membersRouter = require('./router/membersRouter');
const subscriptionRouter = require('./router/subscriptionsRouter');

const app = express();

require('./config/database');
require('./BLL/membersBLL');
require('./BLL/moviesBLL');

// middleWares
app.use(cors());
app.use(express.json());
app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));

// routers
app.use('/api/users', usersRouter);
app.use('/api/members', membersRouter);
app.use('/subscriptions', subscriptionRouter);
app.use(errorHandler);


app.listen(5000, () => {
    console.log('Server is listen to port 5000');
});




