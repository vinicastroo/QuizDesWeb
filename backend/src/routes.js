import { Router } from 'express';

import SessionController from './app/controllers/SessionController';

import QuestionController from './app/controllers/QuestionController';

import validateSessionStore from './app/validators/SessionStore';

import QuestionUserController from './app/controllers/QuestionUserController';

import authMiddleware from './app/middlewares/auth';

class Routes {
  constructor() {
    this.routes = new Router();

    this.freeAuth();

    this.auth();

    this.questions();
  }

  freeAuth() {
    this.routes.post(
      '/sessions',
      validateSessionStore,
      SessionController.store
    );
  }

  auth() {
    //this.routes.use(authMiddleware);

    this.routes.get('/questions', QuestionController.index);

    this.routes.post('/answer-question', QuestionUserController.create);
  }

  questions() {}
}

export default new Routes().routes;
