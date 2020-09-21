import QuestionUser from '../models/QuestionUser';

class QuestionUserController {
  async create(req, res) {
        const answers = req.body;

        await Promise.all(answers.map( async (answer, index) => {
            const newAnwser = {
                "question_id": index + 1,
                "user_id": 1,
                "option": answer,
            };
            await QuestionUser.create(newAnwser);
        }));

        // await QuestionUser.create({
        //     "question_id": 1,
        //     "user_id": 1,
        //     "option": answers[0],
        // })

        return res.status(201).send();
    }
}

export default new QuestionUserController();
