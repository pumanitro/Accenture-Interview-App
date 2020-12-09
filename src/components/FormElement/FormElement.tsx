import React, { FC } from 'react';
import { FormElementWrapper, StyledOverline } from './FormElement.s';

type FormElementPropsType = {
  title: string;
  isRequired?: boolean;
  className?: string;
};

export const FormElement: FC<FormElementPropsType> = ({ title, isRequired = false, children, className }) => {
  return (
    <FormElementWrapper className={className}>
      <StyledOverline>
        {title}
        {isRequired && '*'}
      </StyledOverline>
      {children}
    </FormElementWrapper>
  );
};
