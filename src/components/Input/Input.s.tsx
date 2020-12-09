import styled, { css } from 'styled-components';

export type StyledFormElementPropsType = {
  hasError?: boolean;
};

export const StyledFormElement = css<StyledFormElementPropsType>`
  line-height: 32px;
  padding: 0 12px;
  border: 1px solid
    ${props => (props.hasError ? props.theme.colors.functional.error : props.theme.colors.utils.border.mid)};
  width: 100%;

  box-sizing: border-box;
`;

export const StyledInput = styled.input`
  ${StyledFormElement}
`;
