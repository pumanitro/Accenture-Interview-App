import React, { FC } from 'react';
import { ErrorTooltipText, ErrorTooltip, PositionType } from './GlobalErrorMessage.s';
import { ErrorType } from 'global/ObjectForm/ObjectField';

type GlobalErrorMessageType = {
  message: ErrorType;
  width?: string;
  position?: PositionType;
};

export const GlobalErrorMessage: FC<GlobalErrorMessageType> = ({ message, children, width, position = 'right' }) => {
  return (
    <ErrorTooltip width={width}>
      {children}
      {message && <ErrorTooltipText position={position}>{message} </ErrorTooltipText>}
    </ErrorTooltip>
  );
};
