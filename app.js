require("dotenv").config();
let express = require('express');
let app = express();
let sequelize = require('./db');

let log = require('./controllers/logcontroller');
let user = require('./controllers/usercontroller');

sequelize.sync();

app.use(require("./middleware/headers"));


app.use(express.json());

app.use('/api', user);

// app.use(require('./middleware/validate-session'));

app.use('/api/log', log);

app.listen(4000, function() {
    console.log('App is listening on port 4000');
})