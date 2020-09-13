module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.query(`
      ALTER TABLE questions add column questions_answer_id INTEGER;
      ALTER TABLE questions add column answer_id INTEGER; 
      ALTER TABLE questions add constraint questions_answer_id foreign key(answer_id, questions_answer_id) references alternatives(id, question_id);  
    `);


  },

  down: queryInterface => {
    return queryInterface.removeColumn('questions', 'answer_id');
  },
};