import styled from 'styled-components';

export const PublishButton = styled.button`
  padding: 12px 24px;
  background-color: ${props => props.theme.colors.main.primary};
  border: none;
  color: ${props => props.theme.colors.utils.text.light};
  margin-bottom: 24px;
`;
