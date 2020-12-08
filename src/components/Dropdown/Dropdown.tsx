import React, { FC } from 'react';
import { StyledSelect } from './Dropdown.s';

export type Option = {
  value: string;
  label: string;
};

type DropdownPropTypes = {
  options: Option[];
  value: string;
  onChange: (value: string) => void;
};

export const Dropdown: FC<DropdownPropTypes> = ({ options, value, onChange }) => {
  return (
    <StyledSelect value={value} onChange={e => onChange(e.target.value)}>
      {options.map(option => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </StyledSelect>
  );
};
