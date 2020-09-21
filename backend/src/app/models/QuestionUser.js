import Sequelize, { Model } from 'sequelize';

class QuestionUser extends Model {
  static init(sequelize) {
    super.init(
      {
        option: Sequelize.INTEGER,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.User, {
      foreignKey: 'user_id',
      as: 'users',
    });

    this.belongsTo(models.Question, {
        foreignKey: 'question_id',
        as: 'questions',
      });
  }
}

export default QuestionUser;
