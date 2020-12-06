import styled from 'styled-components';

export const Card = styled.div`
  background-color: ${props => props.theme.colors.utils.background.light};
  padding: 12px 24px;
  display: flex;
  flex-direction: column;
`;

export const CardTitle = styled.h3`
  border-bottom: 1px solid ${props => props.theme.colors.utils.border.mid};
`;
