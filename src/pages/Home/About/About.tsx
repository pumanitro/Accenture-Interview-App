import React from 'react';
import { CardTitle, Card } from 'components/Card/Card.s';
import { Input } from 'components/Input/Input';
import { FormElement } from 'components/FormElement/FormElement';
import { Textarea } from 'components/Textarea/Textarea';
import { Dropdown } from 'components/Dropdown/Dropdown';
import { RadioGroup } from 'components/RadioGroup/RadioGroup';

export const About = () => {
  return (
    <Card>
      <CardTitle>About</CardTitle>
      <FormElement title="title" isRequired>
        <Input placeholder="Make it short and clear" />
      </FormElement>
      <FormElement title="description">
        <Textarea placeholder="Write about your event, be creative" />
      </FormElement>
      <FormElement title="category">
        <Dropdown
          value="fake"
          onChange={(option: string) => {
            console.log('changed');
            console.log(option);
          }}
          options={[
            {
              value: 'fake',
              label: 'fake',
            },
            {
              value: 'fake2',
              label: 'fake2',
            },
            {
              value: 'fake3',
              label: 'fake3',
            },
          ]}
        />
      </FormElement>
      <FormElement title="payment">
        <RadioGroup
          value="fake"
          onChange={(option: string) => {
            console.log('changed');
            console.log(option);
          }}
          options={[
            {
              value: 'Free event',
              label: 'Free event',
            },
            {
              value: 'Paid event',
              label: 'Paid event',
            },
          ]}
        />
      </FormElement>
    </Card>
  );
};
