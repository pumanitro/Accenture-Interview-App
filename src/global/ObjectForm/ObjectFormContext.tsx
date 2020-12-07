import { createCtx } from 'helpers/Context';

export type SetValueType = (value: any) => void;

type RegisteredFieldType = {
  id: string;
  setValue: SetValueType;
};

export type ObjectFormContextType = {
  values: any;
  registeredFields: Record<string, RegisteredFieldType[]>;
};

export const [useObjectForm, ContextProvider] = createCtx<ObjectFormContextType>();
