import React, { FunctionComponent } from 'react';
import { NewEventHeader } from 'components/NewEventHeader/NewEventHeader';
import { About } from './About/About';
import { ObjectForm } from 'global/ObjectForm/ObjectForm';
import { AppWrapper } from 'components/AppWrapper/AppWrapper';
import { Coordinator } from './Coordinator/Coordinator';
import { When } from './When/When';
import { PublishButton } from './Home.s';

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
      date: '',
      time: '',
      amOrPm: 'AM',
      duration: '',
    }}
    onSubmit={formBag => console.log(formBag)}
  >
    <NewEventHeader />

    <AppWrapper>
      <About />
      <Coordinator />
      <When />
      <PublishButton type="submit"> PUBLISH EVENT </PublishButton>
    </AppWrapper>
  </ObjectForm>
);
