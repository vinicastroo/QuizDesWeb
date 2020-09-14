module.exports = {
  up: async queryInterface => {
    const questions = [
      {
        question: 'Questão #1',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        question: 'Questão #2',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        question: 'Questão #3',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ];

    return queryInterface.bulkInsert('questions', questions, {});
  },

  down: () => {},
};
