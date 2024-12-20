module.exports = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define("BlogPost", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      startAt: 1,
      increment: 1,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    postText: {
      type: DataTypes.TEXT('long'),
      allowNull: false,
    },
    datePosted: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: DataTypes.NOW, // set the default value to the current date
    },
    image: {
      type: DataTypes.TEXT('long'),
      allowNull: true,
    }
  }, {
    timestamps: false
  });
  BlogPost.associate = (models) => {
    BlogPost.hasMany(models.Comment, {
      onDelete: "cascade",
    });
    BlogPost.belongsTo(models.User, {
      onDelete: "cascade",
    });
  }
  // BlogPost.sync({ alter: true })
  return BlogPost;
};
