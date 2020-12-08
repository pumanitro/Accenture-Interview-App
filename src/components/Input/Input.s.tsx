import styled, { css } from 'styled-components';

export const StyledFormElement = css`
  line-height: 32px;
  padding: 0 12px;
  border: 1px solid ${props => props.theme.colors.utils.border.mid};
`;

export const StyledInput = styled.input`
  ${StyledFormElement}
`;
