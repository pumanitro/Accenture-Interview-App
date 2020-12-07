import React, { FC } from 'react';
import { ContextProvider } from './ObjectFormContext';

type ObjectFormPropsType = {
  initialValues: Record<string, any>;
};

export const ObjectForm: FC<ObjectFormPropsType> = ({ children, initialValues }) => {
  return <ContextProvider value={{ values: initialValues, registeredFields: {} }}>{children}</ContextProvider>;
};
