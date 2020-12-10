import styled from 'styled-components';
import { Card } from '../../components/Card/Card.s';

export const SuccessBox = styled(Card)`
  background-color: ${props => props.theme.colors.functional.success};
  max-width: 1200px;
  width: 100%;
  padding: 24px;
  margin: 12px;

  & h3 {
    color: #099331;
  }
`;
