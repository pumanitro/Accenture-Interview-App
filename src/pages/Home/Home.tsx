import React, { FunctionComponent } from 'react';
import { NewEventHeader } from 'components/NewEventHeader/NewEventHeader';
import { About } from './About/About';
import { ObjectForm } from 'global/ObjectForm/ObjectForm';
import { AppWrapper } from 'components/AppWrapper/AppWrapper';

export const Home: FunctionComponent = () => (
  <ObjectForm
    initialValues={{
      title: '',
      description: '',
      category: '',
      payment: 'Free event',
      reward: '0',
    }}
    onSubmit={formBag => console.log(formBag)}
  >
    <NewEventHeader />

    <AppWrapper>
      <About />
      <button type="submit"> Submit </button>
    </AppWrapper>
  </ObjectForm>
);
