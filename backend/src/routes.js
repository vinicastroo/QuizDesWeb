import { Router } from 'express';

import SessionController from './app/controllers/SessionController';

import validateSessionStore from './app/validators/SessionStore';

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
    this.routes.use(authMiddleware);
  }

  questions() {}
}

export default new Routes().routes;
