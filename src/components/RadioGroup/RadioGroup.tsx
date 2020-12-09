import { Option } from '../Dropdown/Dropdown';
import React, { FC } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { RadioGroupWrapper, RadioGroupElementWrapper, StyledRadioLabel } from './RadioGroup.s';
import { StyledFormElementPropsType } from '../Input/Input.s';

type RadioGroupPropsType = {
  options: Option[];
  value: string;
  onChange: (value: string) => void;
} & StyledFormElementPropsType;

export const RadioGroup: FC<RadioGroupPropsType> = ({ options, value, onChange }) => {
  const id = uuidv4();

  return (
    <RadioGroupWrapper>
      {options.map(option => (
        <RadioGroupElementWrapper key={id + option.value}>
          <input
            type="radio"
            id={id + option.value}
            name={id}
            value={option.value}
            checked={option.value === value}
            onChange={() => onChange(option.value)}
          />
          <StyledRadioLabel htmlFor={id + option.value}>{option.label}</StyledRadioLabel>
        </RadioGroupElementWrapper>
      ))}
    </RadioGroupWrapper>
  );
};
