import { useObjectField } from 'global/ObjectForm/useObjectField';
import { FormInput } from 'components/FormInput/FormInput';
import { isRequired } from 'helpers/formValidations';
import React from 'react';
import { StyledDollarWrapper } from './Fee.s';

export const Fee = () => {
  const { value } = useObjectField('payment');

  if (value === 'Paid event') {
    return (
      <>
        <FormInput type="number" width="120px" min={0} placeholder="Fee" name="fee" validateFunction={isRequired} />
        <StyledDollarWrapper>$</StyledDollarWrapper>
      </>
    );
  }

  return null;
};
