import Sequelize from 'sequelize';

import databaseConfig from '../config/database';

import User from '../app/models/User';

import Question from '../app/models/Question';

import Alternative from '../app/models/Alternative';

import QuestionUser from '../app/models/QuestionUser';

const models = [User, Question, Alternative, QuestionUser];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }
}

export default new Database();
