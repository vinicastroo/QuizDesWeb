import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Login from '~/pages/Login';

export default function Routes() {
  return (
    <Switch>
      <Route path="/login" component={Login} />
    </Switch>
  );
}
