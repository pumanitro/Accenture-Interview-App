import React from 'react';
import { CardTitle, Card } from 'components/Card/Card.s';
import { Input } from 'components/Input/Input';
import { FormElement } from 'components/FormElement/FormElement';

export const About = () => {
  return (
    <Card>
      <CardTitle>About</CardTitle>
      <FormElement title="title" isRequired>
        <Input placeholder="Make it short and clear" />
      </FormElement>
    </Card>
  );
};
