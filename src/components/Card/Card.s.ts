import styled from 'styled-components';

export const Card = styled.div`
  background-color: ${props => props.theme.colors.utils.background.light};
  padding: 12px 24px;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 24px;

  box-shadow: 1px 1px 8px ${props => props.theme.colors.utils.border.shadow};
`;

export const CardTitle = styled.h3`
  border-bottom: 1px solid ${props => props.theme.colors.utils.border.mid};
`;
