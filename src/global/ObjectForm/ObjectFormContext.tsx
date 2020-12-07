import { createCtx } from 'helpers/Context';
import { ErrorType } from './ObjectField';

export type SetValueType = (value: any) => void;

type RegisteredFieldType = {
  id: string;
  setValue: SetValueType;
};

export type FormBagType = {
  values: Record<string, any>;
  registeredFields: Record<string, RegisteredFieldType[]>;
  errors: Record<string, ErrorType>;
};

export const [useObjectForm, ContextProvider] = createCtx<FormBagType>();
