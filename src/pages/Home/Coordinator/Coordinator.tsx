import React from 'react';
import { CardTitle, Card } from 'components/Card/Card.s';
import { FormElement } from 'components/FormElement/FormElement';
import { FormInput } from 'components/FormInput/FormInput';
import { isRequired } from 'helpers/formValidations';
import { FormDropdown } from 'components/FormDropdown/FormDropdown';

export const Coordinator = () => {
  return (
    <Card>
      <CardTitle>Coordinator</CardTitle>

      <FormElement title="responsible" isRequired>
        <FormDropdown
          name="responsible"
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
          placeholder="Select category"
        />
      </FormElement>

      <FormElement title="email">
        <FormInput placeholder="Email" name="email" validateFunction={isRequired} />
      </FormElement>
    </Card>
  );
};
