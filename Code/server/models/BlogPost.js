module.exports = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define("BlogPost", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    postText: {
      type: DataTypes.TEXT('long'),
      allowNull: false,
    },
    datePosted: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  });
  return BlogPost;
};