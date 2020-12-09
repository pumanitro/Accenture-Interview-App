import styled, { css } from 'styled-components';
import { FormInput } from 'components/FormInput/FormInput';

export const StyledAt = styled.span`
  margin: 0 12px;
`;

export const RadioGroupWrapper = styled.span`
  margin: 0 12px;
  width: calc(100% + 24px);
`;

const RemoveFieldIcon = css`
  // removes icon from date and time inputs
  &::-webkit-calendar-picker-indicator {
    background: transparent;
    bottom: 0;
    color: transparent;
    cursor: pointer;
    height: auto;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    width: auto;
  }

  &::-webkit-datetime-edit-ampm-field {
    display: none;
  }
`;

export const DateFormField = styled(FormInput)`
  ${RemoveFieldIcon}
`;

export const TimeFormField = styled(FormInput)`
  ${RemoveFieldIcon}
`;
