const express = require('express');
const cors = require('cors');

const usersRouter = require('./router/usersRouter');
const app = express();

require('./config/database');
require('./BLL/membersBLL');
require('./BLL/moviesBLL');

// middleWares
app.use(cors());
app.use(express.json());

app.use('/users', usersRouter);

app.listen(8000, ()=>{
    console.log('Server is listen');
});




