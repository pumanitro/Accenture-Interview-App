import React, { FC, useCallback, useEffect, useState } from 'react';
import { useObjectField } from './useObjectField';
import { FormBagType, SetValueType } from './ObjectFormContext';
import { ObjectFieldWrapper } from './ObjectField.s';

export type ErrorType = string | undefined | false;

type FieldBagType = {
  value: string;
  setValue: SetValueType;
  error: ErrorType;
};

export type ValidateFunctionType = ((formBag: FormBagType, name: string) => ErrorType) | undefined;

type ObjectFieldType = {
  name: string;
  width?: string;
  validateFunction?: ValidateFunctionType;
  children: (arg: FieldBagType) => React.ReactNode;
};

const registerFieldValidation = (id: string, formBag: FormBagType, validate: () => void) => {
  formBag.fieldValidations[id] = validate;
};

const unregisterFieldValidation = (id: string, formBag: FormBagType) => {
  formBag.fieldValidations[id] = () => {};
};

export const ObjectField: FC<ObjectFieldType> = ({ name, children, validateFunction, width }) => {
  const { value, setValue, formBag, id } = useObjectField(name);
  const [, setError] = useState<ErrorType>(undefined);

  const validate = useCallback(() => {
    if (!validateFunction) {
      return;
    }

    let newErrors = validateFunction(formBag, name);

    // for having posibility to return error false
    if (newErrors === false) {
      newErrors = undefined;
    }

    formBag.errors[name] = newErrors;

    if (formBag.errors[name] === undefined) {
      delete formBag.errors[name];
    }

    setError(newErrors);
  }, [formBag, name, validateFunction]);

  useEffect(() => {
    registerFieldValidation(id, formBag, validate);
    return () => unregisterFieldValidation(id, formBag);
  }, [id, formBag, validate]);

  return (
    <ObjectFieldWrapper width={width} onBlur={validate}>
      {children({ value, setValue, error: formBag.errors[name] })}
    </ObjectFieldWrapper>
  );
};
