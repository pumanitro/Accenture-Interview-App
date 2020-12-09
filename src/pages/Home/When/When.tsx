import React from 'react';
import { CardTitle, Card } from 'components/Card/Card.s';
import { FormElement } from 'components/FormElement/FormElement';
import { FormInput } from 'components/FormInput/FormInput';
import { isRequired } from 'helpers/formValidations';
import { FormRadioGroup } from '../../../components/FormRadioGroup/FormRadioGroup';
import { CenteredWrapper, NumberFieldText } from '../About/About.s';

export const When = () => {
  return (
    <Card>
      <CardTitle>When</CardTitle>

      <FormElement title="starts on" isRequired>
        <CenteredWrapper>
          <FormInput type="date" name="date" validateFunction={isRequired} />
          <span> at </span>
          <FormInput type="time" name="time" validateFunction={isRequired} />
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
        </CenteredWrapper>
      </FormElement>

      <FormElement title="reward">
        <CenteredWrapper>
          <FormInput width="120px" placeholder="Number" type="number" min={0} name="reward" />
          <NumberFieldText> hour</NumberFieldText>
        </CenteredWrapper>
      </FormElement>
    </Card>
  );
};
