import React, { FunctionComponent } from 'react';
import { NewEventHeader } from 'components/NewEventHeader/NewEventHeader';
import { About } from './About/About';
import { ObjectForm } from 'global/ObjectForm/ObjectForm';
import { AppWrapper } from 'components/AppWrapper/AppWrapper';
import { Coordinator } from './Coordinator/Coordinator';

export const Home: FunctionComponent = () => (
  <ObjectForm
    initialValues={{
      title: '',
      description: '',
      category: '',
      payment: 'Free event',
      reward: '',
      responsible: '',
      email: '',
    }}
    onSubmit={formBag => console.log(formBag)}
  >
    <NewEventHeader />

    <AppWrapper>
      <About />
      <Coordinator />
      <button type="submit"> Submit </button>
    </AppWrapper>
  </ObjectForm>
);
