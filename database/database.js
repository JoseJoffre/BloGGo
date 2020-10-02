const Sequelize = require("sequelize");
const connection = new Sequelize("blogGo", "root", "Zmhx8wqc.93", {
    host: "localhost",
    dialect: "mysql",
    timezone: "-03:00"
});

module.exports = connection;
