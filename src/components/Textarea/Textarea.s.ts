import styled from 'styled-components';
import { StyledFormElement, StyledFormElementPropsType } from 'components/Input/Input.s';

export const StyledTextarea = styled.textarea`
  ${StyledFormElement}
  resize: none;
`;

export const TextareaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const Counter = styled.span<StyledFormElementPropsType>`
  color: ${props => (props.hasError ? props.theme.colors.functional.error : props.theme.colors.utils.text.dark)};
`;
