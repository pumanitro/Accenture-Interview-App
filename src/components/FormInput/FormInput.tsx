import React, { FC } from 'react';
import { ObjectField, ValidateFunctionType } from 'global/ObjectForm/ObjectField';
import { Input } from 'components/Input/Input';

type FormInputType = {
  name: string;
  validateFunction?: ValidateFunctionType;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const FormInput: FC<FormInputType> = ({ name, validateFunction, ...rest }) => {
  return (
    <ObjectField name={name} validateFunction={validateFunction}>
      {({ value, setValue, error }) => {
        return (
          <>
            <Input {...rest} value={value} onChange={e => setValue(e.target.value)} />
            {error}
          </>
        );
      }}
    </ObjectField>
  );
};
