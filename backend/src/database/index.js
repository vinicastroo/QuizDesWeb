import Sequelize from 'sequelize';

import databaseConfig from '../config/database';

import User from '../app/models/User';
import UserProfile from '../app/models/UserProfile';

import LiveConfig from '../app/models/LiveConfig';
import Interested from '../app/models/Interested';

import Message from '../app/models/Message';

import Participant from '../app/models/Participant';

const models = [
  User,
  UserProfile,
  LiveConfig,
  Interested,
  Message,
  Participant,
];

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
