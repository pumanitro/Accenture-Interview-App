/* eslint-disable @typescript-eslint/camelcase */
import React, { FunctionComponent } from 'react';
import { NewEventHeader } from 'components/NewEventHeader/NewEventHeader';
import { About } from './About/About';
import { ObjectForm } from 'global/ObjectForm/ObjectForm';
import { AppWrapper } from 'components/AppWrapper/AppWrapper';
import { Coordinator } from './Coordinator/Coordinator';
import { When } from './When/When';
import { PublishButton } from './Home.s';
import { withDropdownsData } from './withDropdownsData';

export const HomeContent: FunctionComponent = () => (
  <ObjectForm
    initialValues={{
      title: '',
      description: '',
      category: '',
      payment: 'Free event',
      fee: '',
      reward: '',
      responsible: '',
      email: '',
      date: '',
      time: '',
      amOrPm: 'AM',
      duration: '',
    }}
    onSubmit={formBag => {
      const splitTime = formBag.values.time.split(':');
      const time = `${formBag.values.amOrPm === 'AM' ? splitTime[0] : splitTime[0] + 12}:${splitTime[1]}`;

      const responsiblePerson = JSON.parse(formBag.values.responsible);

      console.log({
        title: formBag.values.title,
        description: formBag.values.description,
        category_id: formBag.values.category,
        paid_event: formBag.values.payment === 'Paid event',
        event_fee: formBag.values.fee,
        reward: formBag.values.reward,
        date: `${formBag.values.date}T${time}`,
        duration: formBag.values.duration * 3600,
        coordinator: {
          email: formBag.values.email,
          id: responsiblePerson.id,
        },
      });
    }}
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

export const Home = withDropdownsData(HomeContent);
