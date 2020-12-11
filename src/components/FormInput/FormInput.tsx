import React, { FC } from 'react';
import { ObjectField, ValidateFunctionType } from 'global/ObjectForm/ObjectField';
import { Input } from 'components/Input/Input';
import { GlobalErrorMessage } from 'components/GlobalErrorMessage/GlobalErrorMessage';
import { PositionType } from '../GlobalErrorMessage/GlobalErrorMessage.s';

type FormInputType = {
  name: string;
  width?: string;
  validateFunction?: ValidateFunctionType;
  errorPosition?: PositionType;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const FormInput: FC<FormInputType> = ({ name, width, errorPosition, validateFunction, ...rest }) => {
  return (
    <ObjectField name={name} validateFunction={validateFunction} width={width}>
      {({ value, setValue, error }) => {
        return (
          <>
            <GlobalErrorMessage message={error} width={width} position={errorPosition}>
              <Input
                {...rest}
                value={value}
                onChange={e => setValue(e.target.value)}
                hasError={!!error}
                width={width}
              />
            </GlobalErrorMessage>
          </>
        );
      }}
    </ObjectField>
  );
};
