import Question from '../models/Question';
import Alternative from '../models/Alternative';

class SessionController {
  async index(req, res) {
    const questions = await Question.findAll({ order: ['id'] });

    if (questions) {
      const newQuestions = [];

      await Promise.all(
        questions.map(async question => {
          const altenatives = await Alternative.findAll({
            where: { question_id: question.id },
          });
          newQuestions.push({ question, altenatives });
          return question;
        })
      );

      return res.json({
        newQuestions,
      });
    }

    return res.json({
      questions,
    });
  }
}

export default new SessionController();
