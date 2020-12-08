import React from 'react';
import { CardTitle, Card } from 'components/Card/Card.s';
import { Input } from 'components/Input/Input';
import { FormElement } from 'components/FormElement/FormElement';
import { RadioGroup } from 'components/RadioGroup/RadioGroup';
import { FormInput } from 'components/FormInput/FormInput';
import { isRequired } from 'helpers/formValidations';
import { FormTextarea } from 'components/FormTextarea/FormTextarea';
import { FormDropdown } from 'components/FormDropdown/FormDropdown';

export const About = () => {
  return (
    <Card>
      <CardTitle>About</CardTitle>
      <FormElement title="title" isRequired>
        <FormInput placeholder="Make it short and clear" name="title" validateFunction={isRequired} />
      </FormElement>
      <FormElement title="description" isRequired>
        <FormTextarea
          name="description"
          rows={4}
          placeholder="Write about your event, be creative"
          maxlength={140}
          validateFunction={isRequired}
        />
      </FormElement>

      <FormElement title="category">
        <FormDropdown
          name="category"
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

      <FormElement title="reward">
        <Input placeholder="Number" type="number" min={0} />
        <span> reward points for attendance</span>
      </FormElement>
    </Card>
  );
};
