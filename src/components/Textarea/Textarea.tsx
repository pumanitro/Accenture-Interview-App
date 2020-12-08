import React, { useState, FC, ChangeEvent } from 'react';
import { StyledTextarea, TextareaWrapper, Counter } from './Textarea.s';
import { StyledFormElementPropsType } from '../Input/Input.s';

type TextareaPropsType = {
  maxlength: number;
  value: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
} & React.TextareaHTMLAttributes<HTMLTextAreaElement> &
  StyledFormElementPropsType;

export const Textarea: FC<TextareaPropsType> = ({ maxlength, hasError, value = '', onChange, ...rest }) => {
  const [counter, setCounter] = useState(maxlength);
  const subValue = value.substring(0, maxlength).trim();

  const onChangeCallback = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setCounter(maxlength - e.target.value.substring(0, maxlength).length);
    if (onChange) {
      onChange(e);
    }
  };

  return (
    <TextareaWrapper>
      <StyledTextarea onChange={onChangeCallback} value={subValue} hasError={hasError} {...rest} />
      <Counter hasError={hasError}>{counter}</Counter>
    </TextareaWrapper>
  );
};
