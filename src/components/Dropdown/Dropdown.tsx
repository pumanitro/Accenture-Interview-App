import React, { FC, ChangeEvent } from 'react';
import { StyledSelect } from './Dropdown.s';
import { StyledFormElementPropsType } from '../Input/Input.s';
import { isObject } from 'helpers/jsUtils';

export type Option = {
  value: string;
  label: string;
};

type DropdownPropTypes = {
  options: Option[] | Record<string, Option[]>;
  value: string;
  placeholder?: string;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
} & StyledFormElementPropsType;

const getOptions = (options: Option[]) =>
  options.map(option => (
    <option key={option.value} value={option.value}>
      {option.label}
    </option>
  ));

export const Dropdown: FC<DropdownPropTypes> = ({ options, value, onChange, placeholder }) => {
  console.log(isObject(options));

  return (
    <StyledSelect value={value} onChange={onChange}>
      {placeholder && (
        <option value="" hidden>
          {placeholder}
        </option>
      )}

      {!Array.isArray(options)
        ? Object.entries(options).map(([groupKey, options]) => (
            <optgroup key={groupKey} label={groupKey}>
              {getOptions(options)}
            </optgroup>
          ))
        : getOptions(options as Option[])}

      {}
    </StyledSelect>
  );
};
