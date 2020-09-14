module.exports = {
  up: async queryInterface => {
    await queryInterface.bulkUpdate(
      'questions',
      { questions_answer_id: 2 },
      {
        id: 1,
      }
    );
    await queryInterface.bulkUpdate(
      'questions',
      { questions_answer_id: 6 },
      {
        id: 2,
      }
    );

    return queryInterface.bulkUpdate(
      'questions',
      { questions_answer_id: 15 },
      {
        id: 3,
      }
    );
  },

  down: () => {},
};
