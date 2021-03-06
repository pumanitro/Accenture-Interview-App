import React from 'react';
import { CardTitle, Card } from 'components/Card/Card.s';
import { FormElement } from 'components/FormElement/FormElement';
import { FormInput } from 'components/FormInput/FormInput';
import { isRequired } from 'helpers/formValidations';
import { FormTextarea } from 'components/FormTextarea/FormTextarea';
import { FormRadioGroup } from 'components/FormRadioGroup/FormRadioGroup';
import { CenteredWrapper, NumberFieldText } from './About.s';
import { Fee } from './Fee/Fee';
import { CategoryDropdown } from './CategoryDropdown/CategoryDropdown';

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

      <CategoryDropdown />
      <FormElement title="payment">
        <CenteredWrapper>
          <FormRadioGroup
            name="payment"
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
          <Fee />
        </CenteredWrapper>
      </FormElement>

      <FormElement title="reward">
        <CenteredWrapper>
          <FormInput width="120px" placeholder="Number" type="number" min={0} name="reward" />
          <NumberFieldText> reward points for attendance</NumberFieldText>
        </CenteredWrapper>
      </FormElement>
    </Card>
  );
};
