const Sequelize = require("sequelize");
const connection = require("../database/database");
const Category = require("../categories/Category")

const Article = connection.define("articles", {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    }, slug: {
        type: Sequelize.STRING,
        allowNull: false
    },
    body: {
        type: Sequelize.TEXT,
        alloNull: false
    }
})

Category.hasMany(Article); //UMA categoria tem muitos artigos.
Article.belongsTo(Category); //UM artigo pertence a uma categoria.

Article.sync({ force: false });

module.exports = Article;