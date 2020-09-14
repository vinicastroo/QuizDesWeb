import Question from '../models/Question';

class SessionController {
  async index(req, res) {
    const question = await Question.findAll();

    return res.json({
      question,
    });
  }
}

export default new SessionController();
