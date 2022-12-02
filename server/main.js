const express = require('express');
const cors = require('cors');
const bp = require("body-parser");
const dotenv = require('dotenv').config()
const { errorHandler } = require('./middleware/errorMiddleware');

// routers files
const usersDB_Router = require('./router/usersDB_Router');
const usersJSON_Router = require('./router/usersJSON_Router');
const membersRouter = require('./router/membersRouter');
const moviesRouter = require('./router/moviesRouter')
const subscriptionRouter = require('./router/subscriptionsRouter');
const permissionsRouter = require('./router/permissionsRouter')

const app = express();
require('./config/database');

// middleWares
app.use(cors());
app.use(express.json());
app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));

// routers
app.use('/api/users', usersDB_Router);
app.use('/users', usersJSON_Router);
app.use('/api/members', membersRouter);
app.use('/api/movies', moviesRouter);
app.use('/permissions', permissionsRouter);
app.use('/subscriptions', subscriptionRouter);

app.use(errorHandler);

app.listen(5000, () => {
    console.log('Server is listen to port 5000');
});