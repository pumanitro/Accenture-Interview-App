import React, { FunctionComponent } from 'react';
import { NewEventHeader } from 'components/NewEventHeader/NewEventHeader';
import { About } from './About/About';
import { ObjectForm } from 'global/ObjectForm/ObjectForm';

export const Home: FunctionComponent = () => (
  <ObjectForm
    initialValues={{
      title: '',
    }}
  >
    <NewEventHeader />
    <About />
  </ObjectForm>
);
