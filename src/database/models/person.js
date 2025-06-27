'use strict';

const validateCPF = require('../../utils/validateCPF')
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Person extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Person.hasMany(models.Course, {
        foreignKey: 'teacher_id'
      })
      Person.hasMany(models.Registration, {
        foreignKey: 'student_id',
        // scope: { status: 'matriculado' },
        as: 'enrolledClasses'
      })
    }
  }
  Person.init({
    name: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [3, 100],
          msg: 'The name must be between 3 and 100 characters long.'
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: "Invalid email format"
        }
      }
    },
    cpf: {
      type: DataTypes.STRING,
      validate: {
        isValidCPF(value) {
          if (!validateCPF(value)) {
            throw new Error('Invalid CPF format');
          }
        }
      }
    },
    isActive: DataTypes.BOOLEAN,
    role: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Person',
    tableName: 'people',
    paranoid: true,
    defaultScope: {
      where: {
        isActive: true
      }
    },
    scopes: {
      allRecords: {
        where: {}
      }
    }
  });
  return Person;
};