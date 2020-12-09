import React, { FC } from 'react';
import { ErrorTooltipText, ErrorTooltip } from './GlobalErrorMessage.s';
import { ErrorType } from 'global/ObjectForm/ObjectField';

type GlobalErrorMessageType = {
  message: ErrorType;
  width?: string;
};

export const GlobalErrorMessage: FC<GlobalErrorMessageType> = ({ message, children, width }) => {
  return (
    <ErrorTooltip width={width}>
      {children}
      {message && <ErrorTooltipText>{message} </ErrorTooltipText>}
    </ErrorTooltip>
  );
};
