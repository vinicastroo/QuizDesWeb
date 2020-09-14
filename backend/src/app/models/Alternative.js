import Sequelize, { Model } from 'sequelize';

class Alternative extends Model {
  static init(sequelize) {
    super.init(
      {
        question: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Question, {
      foreignKey: 'question_id	',
      as: 'alternatives',
    });
  }
}

export default Alternative;
