// const User = require("./User");

module.exports = (sequelize, DataTypes) => {
    const Comment = sequelize.define("Comment", {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            startAt: 1,
            increment: 1,
        },
        commentText: {
            type: DataTypes.TEXT('long'),
            allowNull: false,
        },
        datePosted: {
            type: DataTypes.DATEONLY,
            allowNull: false,
            defaultValue: DataTypes.NOW, // set the default value to the current date
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        blogPostId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    }, {
        timestamps: false
    });
    Comment.sync({ alter: true })
    // Comment.belongsTo(User, { foreignKey: 'userId' });
    return Comment;
};
