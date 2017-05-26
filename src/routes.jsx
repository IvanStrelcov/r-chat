import { Route } from 'react-router';
import React from 'react';
import Root from './containers/root/index';
import Chat from './containers/chat/index';

export default () => (
  <Root>
    <Route path="/" exact component={Chat} />
  </Root>
);
