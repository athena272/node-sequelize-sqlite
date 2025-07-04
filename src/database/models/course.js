'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Course extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Course.hasMany(models.Registration, {
        foreignKey: 'course_id'
      })
      Course.belongsTo(models.Category, {
        foreignKey: 'category_id'
      })
      Course.belongsTo(models.Person, {
        foreignKey: 'teacher_id'
      })
    }
  }
  Course.init({
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    start_date: DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: 'Course',
    tableName: 'courses',
    paranoid: true,
  });
  return Course;
};