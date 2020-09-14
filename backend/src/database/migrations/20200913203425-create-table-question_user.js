module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('question_user', {
      user_question_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      question_id: {
        type: Sequelize.INTEGER,
        references: { model: 'questions', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: false,
        primaryKey: true,
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: { model: 'users', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: false,
        primaryKey: true,
      },
      option: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable('question_user');
  },
};
