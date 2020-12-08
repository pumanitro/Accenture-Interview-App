import React, { ChangeEvent, FC } from 'react';
import { ObjectField, ValidateFunctionType } from 'global/ObjectForm/ObjectField';
import { GlobalErrorMessage } from 'components/GlobalErrorMessage/GlobalErrorMessage';
import { Textarea } from '../Textarea/Textarea';

type FormInputType = {
  name: string;
  maxlength: number;
  validateFunction?: ValidateFunctionType;
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export const FormTextarea: FC<FormInputType> = ({ name, validateFunction, maxlength, ...rest }) => {
  return (
    <ObjectField name={name} validateFunction={validateFunction}>
      {({ value, setValue, error }) => {
        return (
          <>
            <GlobalErrorMessage message={error}>
              <Textarea
                {...rest}
                value={value}
                onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setValue(e.target.value)}
                hasError={!!error}
                maxlength={maxlength}
              />
            </GlobalErrorMessage>
          </>
        );
      }}
    </ObjectField>
  );
};
