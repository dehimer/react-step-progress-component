import React from 'react';
import { Route, Switch } from 'react-router-dom';
import StepProgress from './components/StepProgress';

export default () => (
  <div>
    <Switch>
      <Route exact path="/:step?" component={StepProgress} />
    </Switch>
  </div>
);
