import React, { FC } from 'react';
import { useObjectField } from 'global/ObjectForm/useObjectField';
import { Input } from '../Input/Input';

type FormInputType = {
  name: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const FormInput: FC<FormInputType> = ({ name, ...rest }) => {
  const { value, setValue } = useObjectField(name);

  return <Input {...rest} value={value} onChange={e => setValue(e.target.value)} />;
};
