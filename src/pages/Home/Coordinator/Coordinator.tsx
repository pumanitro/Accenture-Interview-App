import React from 'react';
import { CardTitle, Card } from 'components/Card/Card.s';
import { FormElement } from 'components/FormElement/FormElement';
import { FormInput } from 'components/FormInput/FormInput';
import { isValidEmail } from 'helpers/formValidations';
import { ResponsibleDropdown } from './ResponsibleDropdown/ResponsibleDropdown';

export const Coordinator = () => {
  return (
    <Card>
      <CardTitle>Coordinator</CardTitle>

      <ResponsibleDropdown />

      <FormElement title="email">
        <FormInput placeholder="Email" name="email" validateFunction={isValidEmail} />
      </FormElement>
    </Card>
  );
};
