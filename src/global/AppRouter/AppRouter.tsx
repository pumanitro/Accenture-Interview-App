import React, { FunctionComponent } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home } from 'pages/Home/Home';
import { Success } from 'pages/Success/Success';

export const AppRouter: FunctionComponent = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/success" exact component={Success} />
      </Switch>
    </>
  );
};
