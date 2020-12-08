import React, { FC } from 'react';
import { ObjectField, ValidateFunctionType } from 'global/ObjectForm/ObjectField';
import { GlobalErrorMessage } from 'components/GlobalErrorMessage/GlobalErrorMessage';
import { Option } from '../Dropdown/Dropdown';
import { RadioGroup } from '../RadioGroup/RadioGroup';

type FormRadioGroupType = {
  name: string;
  options: Option[];
  validateFunction?: ValidateFunctionType;
};

export const FormRadioGroup: FC<FormRadioGroupType> = ({ name, validateFunction, options }) => {
  return (
    <ObjectField name={name} validateFunction={validateFunction}>
      {({ value, setValue, error }) => {
        return (
          <>
            <GlobalErrorMessage message={error}>
              <RadioGroup options={options} value={value} onChange={value => setValue(value)} hasError={!!error} />
            </GlobalErrorMessage>
          </>
        );
      }}
    </ObjectField>
  );
};
