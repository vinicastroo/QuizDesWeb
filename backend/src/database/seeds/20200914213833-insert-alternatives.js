module.exports = {
  up: async queryInterface => {
    const alternatives = [
      {
        question_id: 1,
        option: 'Alternativa 1-1',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        question_id: 1,
        option: 'Alternativa 1-2',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        question_id: 1,
        option: 'Alternativa 1-3',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        question_id: 1,
        option: 'Alternativa 1-4',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        question_id: 1,
        option: 'Alternativa 1-5',
        created_at: new Date(),
        updated_at: new Date(),
      },

      {
        question_id: 2,
        option: 'Alternativa 2-1',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        question_id: 2,
        option: 'Alternativa 2-2',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        question_id: 2,
        option: 'Alternativa 2-3',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        question_id: 2,
        option: 'Alternativa 2-4',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        question_id: 2,
        option: 'Alternativa 2-5',
        created_at: new Date(),
        updated_at: new Date(),
      },

      {
        question_id: 3,
        option: 'Alternativa 3-1',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        question_id: 3,
        option: 'Alternativa 3-2',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        question_id: 3,
        option: 'Alternativa 3-3',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        question_id: 3,
        option: 'Alternativa 3-4',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        question_id: 3,
        option: 'Alternativa 3-5',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ];

    return queryInterface.bulkInsert('alternatives', alternatives, {});
  },

  down: () => {},
};
