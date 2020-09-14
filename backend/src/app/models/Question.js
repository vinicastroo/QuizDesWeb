import Sequelize, { Model } from 'sequelize';

class Question extends Model {
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
    this.belongsTo(models.Alternative, {
      foreignKey: 'questions_answer_id',
      as: 'alternatives',
    });
  }
}

export default Question;
