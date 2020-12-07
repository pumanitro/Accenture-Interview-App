import React, { FC } from 'react';
import { ContextProvider, FormBagType, useObjectForm } from './ObjectFormContext';

type OnSubmitType = (arg: FormBagType) => void;

type ObjectFormPropsType = {
  initialValues: Record<string, any>;
  onSubmit: OnSubmitType;
};

type FormPropType = {
  onSubmit: OnSubmitType;
};

const Form: FC<FormPropType> = ({ children, onSubmit }) => {
  const formBag = useObjectForm();
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        onSubmit(formBag);
      }}
    >
      {children}
    </form>
  );
};

export const ObjectForm: FC<ObjectFormPropsType> = ({ children, initialValues, onSubmit }) => {
  return (
    <ContextProvider value={{ values: initialValues, registeredFields: {}, errors: {} }}>
      <Form onSubmit={onSubmit}>{children}</Form>
    </ContextProvider>
  );
};
