import React, { FC } from 'react';
import { Overline } from '../Overline/Overline.s';
import { FormElementWrapper } from './FormElement.s';

type FormElementPropsType = {
  title: string;
  isRequired?: boolean;
};

export const FormElement: FC<FormElementPropsType> = ({ title, isRequired = false, children }) => {
  return (
    <FormElementWrapper>
      <Overline>
        {title}
        {isRequired && '*'}
      </Overline>
      {children}
    </FormElementWrapper>
  );
};
