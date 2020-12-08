import React, { FC, ChangeEvent } from 'react';
import { StyledSelect } from './Dropdown.s';
import { StyledFormElementPropsType } from '../Input/Input.s';

export type Option = {
  value: string;
  label: string;
};

type DropdownPropTypes = {
  options: Option[];
  value: string;
  placeholder?: string;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
} & StyledFormElementPropsType;

export const Dropdown: FC<DropdownPropTypes> = ({ options, value, onChange, placeholder }) => {
  return (
    <StyledSelect value={value} onChange={onChange}>
      {placeholder && (
        <option value="" hidden>
          {placeholder}
        </option>
      )}
      {options.map(option => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </StyledSelect>
  );
};
