const express = require('express');
const path = require('path');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const getRouter = require('./routes/get');
const postRouter = require('./routes/post');
const deleteRouter = require('./routes/delete');
const putRouter = require('./routes/put');
const ManageUsers = require("./mock/users");

const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
/*app.use(express.static(path.join(__dirname, 'public')));*/

ManageUsers.initializeUserList(10);

/*app.use('/', indexRouter);*/
app.use(express.static(path.join(__dirname, 'phonebook')));
app.use('/get', getRouter);
app.use('/post', postRouter);
app.use('/delete', deleteRouter);
app.use('/put', putRouter);

module.exports = app;
