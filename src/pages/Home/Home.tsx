import React, { FunctionComponent } from 'react';
import { NewEventHeader } from 'components/NewEventHeader/NewEventHeader';
import { About } from './About/About';

export const Home: FunctionComponent = () => (
  <>
    <NewEventHeader />
    <About />
  </>
);
