import styled from 'styled-components';

export const StyledHeader = styled.h1`
  border-top: 16px solid ${props => props.theme.colors.utils.text.dark};
  margin: 0;
  padding: 24px;
  font-weight: 300;
  color: ${props => props.theme.colors.utils.text.light};
  background-color: ${props => props.theme.colors.utils.background.mid};
`;
