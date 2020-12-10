import React, { FC } from 'react';
import { ObjectField, ValidateFunctionType } from 'global/ObjectForm/ObjectField';
import { GlobalErrorMessage } from 'components/GlobalErrorMessage/GlobalErrorMessage';
import { Dropdown, Option } from '../Dropdown/Dropdown';

type FormDropdownType = {
  name: string;
  validateFunction?: ValidateFunctionType;
  placeholder?: string;
  options: Option[] | Record<string, Option[]>;
};

export const FormDropdown: FC<FormDropdownType> = ({ name, validateFunction, options, placeholder }) => {
  return (
    <ObjectField name={name} validateFunction={validateFunction}>
      {({ value, setValue, error }) => {
        return (
          <>
            <GlobalErrorMessage message={error}>
              <Dropdown
                options={options}
                value={value}
                onChange={e => setValue(e.target.value)}
                hasError={!!error}
                placeholder={placeholder}
              />
            </GlobalErrorMessage>
          </>
        );
      }}
    </ObjectField>
  );
};
