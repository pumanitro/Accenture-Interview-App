import React, { FC } from 'react';
import { ErrorTooltipText, ErrorTooltip } from './GlobalErrorMessage.s';
import { ErrorType } from 'global/ObjectForm/ObjectField';

type GlobalErrorMessageType = {
  message: ErrorType;
};

export const GlobalErrorMessage: FC<GlobalErrorMessageType> = ({ message, children }) => {
  return (
    <ErrorTooltip>
      {children}
      {message && <ErrorTooltipText>{message} </ErrorTooltipText>}
    </ErrorTooltip>
  );
};
