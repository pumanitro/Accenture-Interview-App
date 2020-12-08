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
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
} & StyledFormElementPropsType;

export const Dropdown: FC<DropdownPropTypes> = ({ options, value, onChange }) => {
  return (
    <StyledSelect value={value} onChange={onChange}>
      {options.map(option => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </StyledSelect>
  );
};
