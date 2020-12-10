import React from 'react';
import { CardTitle, Card } from 'components/Card/Card.s';
import { FormElement } from 'components/FormElement/FormElement';
import { FormInput } from 'components/FormInput/FormInput';
import { isRequired } from 'helpers/formValidations';
import { FormRadioGroup } from 'components/FormRadioGroup/FormRadioGroup';
import { CenteredWrapper, NumberFieldText } from '../About/About.s';
import { DateFormField, RadioGroupWrapper, StyledAt, TimeFormField } from './When.s';

export const When = () => {
  return (
    <Card>
      <CardTitle>When</CardTitle>

      <FormElement title="starts on" isRequired>
        <CenteredWrapper>
          <DateFormField type="date" name="date" validateFunction={isRequired} />
          <StyledAt> at </StyledAt>
          <TimeFormField type="time" name="time" validateFunction={isRequired} />
          <RadioGroupWrapper>
            <FormRadioGroup
              name="amOrPm"
              options={[
                {
                  value: 'AM',
                  label: 'AM',
                },
                {
                  value: 'PM',
                  label: 'PM',
                },
              ]}
            />
          </RadioGroupWrapper>
        </CenteredWrapper>
      </FormElement>

      <FormElement title="duration">
        <CenteredWrapper>
          <FormInput width="120px" placeholder="Number" type="number" min={0} name="duration" />
          <NumberFieldText> hour</NumberFieldText>
        </CenteredWrapper>
      </FormElement>
    </Card>
  );
};
