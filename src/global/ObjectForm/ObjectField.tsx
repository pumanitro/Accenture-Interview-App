import React, { FC, useState } from 'react';
import { useObjectField } from './useObjectField';
import { FormBagType, SetValueType } from './ObjectFormContext';

export type ErrorType = string | undefined | false;

type FieldBagType = {
  value: string;
  setValue: SetValueType;
  error: ErrorType;
};

export type ValidateFunctionType = ((formBag: FormBagType) => ErrorType) | undefined;

type ObjectFieldType = {
  name: string;
  validateFunction?: ValidateFunctionType;
  children: (arg: FieldBagType) => React.ReactNode;
};

export const ObjectField: FC<ObjectFieldType> = ({ name, children, validateFunction }) => {
  const { value, setValue, formBag } = useObjectField(name);
  const [, setError] = useState<ErrorType>(undefined);

  return (
    <div
      onBlur={() => {
        if (!validateFunction) {
          return;
        }

        let newErrors = validateFunction(formBag);

        // for having posibility to return error false
        if (newErrors === false) {
          newErrors = undefined;
        }

        formBag.errors[name] = newErrors;
        setError(newErrors);
      }}
    >
      {children({ value, setValue, error: formBag.errors[name] })}
    </div>
  );
};
