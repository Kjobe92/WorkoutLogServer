const Sequelize = require('sequelize');
const sequelize = new Sequelize('log-app', 'postgres', 'password', {
    host: 'localhost',
    dialect: 'postgres'
});

sequelize.authenticate().then(
    function() {
        console.log('Connected to log-app postgres database');
    },
    function(err) {
        console.log(err);
    }
);
module.exports = sequelize;