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

const runFieldValidations = (formBag: FormBagType) => {
  Object.values(formBag.fieldValidations).forEach(validation => validation());
};

const Form: FC<FormPropType> = ({ children, onSubmit }) => {
  const formBag = useObjectForm();
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        runFieldValidations(formBag);
        if (!Object.keys(formBag.errors).length) {
          onSubmit(formBag);
        }
      }}
    >
      {children}
    </form>
  );
};

export const ObjectForm: FC<ObjectFormPropsType> = ({ children, initialValues, onSubmit }) => {
  return (
    <ContextProvider value={{ values: initialValues, registeredFields: {}, errors: {}, fieldValidations: {} }}>
      <Form onSubmit={onSubmit}>{children}</Form>
    </ContextProvider>
  );
};
