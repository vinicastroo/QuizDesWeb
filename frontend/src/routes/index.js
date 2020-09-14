import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Login from '~/pages/Login';
import Quiz from '~/pages/Quiz';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/quiz" exact component={Quiz} isPrivate />
    </Switch>
  );
}
