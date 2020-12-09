import React, { FC } from 'react';
import { FormElementWrapper, StyledOverline } from './FormElement.s';

type FormElementPropsType = {
  title: string;
  isRequired?: boolean;
};

export const FormElement: FC<FormElementPropsType> = ({ title, isRequired = false, children }) => {
  return (
    <FormElementWrapper>
      <StyledOverline>
        {title}
        {isRequired && '*'}
      </StyledOverline>
      {children}
    </FormElementWrapper>
  );
};
