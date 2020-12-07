import React, { FC, useState } from 'react';
import { useObjectForm, ContextProvider } from './ObjectFormContext';

type ObjectFormPropsType = {
  initialValues: Record<string, any>;
};

export const ObjectForm: FC<ObjectFormPropsType> = ({ children, initialValues }) => {
  const { values } = useObjectForm();

  return <ContextProvider value={{ values: initialValues, registeredFields: {} }}>{children}</ContextProvider>;
};
