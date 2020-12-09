import React, { FC, useState } from 'react';
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
  validateFunction?: ValidateFunctionType;
  children: (arg: FieldBagType) => React.ReactNode;
};

export const ObjectField: FC<ObjectFieldType> = ({ name, children, validateFunction }) => {
  const { value, setValue, formBag } = useObjectField(name);
  const [, setError] = useState<ErrorType>(undefined);

  return (
    <ObjectFieldWrapper
      onBlur={() => {
        if (!validateFunction) {
          return;
        }

        let newErrors = validateFunction(formBag, name);

        // for having posibility to return error false
        if (newErrors === false) {
          newErrors = undefined;
        }

        formBag.errors[name] = newErrors;
        setError(newErrors);
      }}
    >
      {children({ value, setValue, error: formBag.errors[name] })}
    </ObjectFieldWrapper>
  );
};
