import React from 'react';
import { CardTitle, Card } from 'components/Card/Card.s';
import { FormElement } from 'components/FormElement/FormElement';
import { FormInput } from 'components/FormInput/FormInput';
import { isRequired } from 'helpers/formValidations';
import { CenteredRowWrapper, CenteredWrapper, NumberFieldText } from '../About/About.s';
import { DateFormField, StyledAt, TimeFormField } from './When.s';

export const When = () => {
  return (
    <Card>
      <CardTitle>When</CardTitle>

      <FormElement title="starts on" isRequired>
        <CenteredWrapper>
          <DateFormField type="date" name="date" validateFunction={isRequired} />
          <StyledAt> at </StyledAt>
          <TimeFormField type="time" name="time" validateFunction={isRequired} errorPosition={'bottom'} />
        </CenteredWrapper>
      </FormElement>

      <FormElement title="duration">
        <CenteredRowWrapper>
          <FormInput width="120px" placeholder="Number" type="number" min={0} name="duration" />
          <NumberFieldText> hour</NumberFieldText>
        </CenteredRowWrapper>
      </FormElement>
    </Card>
  );
};
