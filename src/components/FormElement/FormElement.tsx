import React, { FC } from 'react';
import { Overline } from '../Overline/Overline.s';

type FormElementPropsType = {
  title: string;
  isRequired: boolean;
};

export const FormElement: FC<FormElementPropsType> = ({ title, isRequired, children }) => {
  return (
    <>
      <Overline>
        {title}
        {isRequired && '*'}
      </Overline>
      {children}
    </>
  );
};
