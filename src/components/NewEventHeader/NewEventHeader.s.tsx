import styled from 'styled-components';
import { AppWrapperStyles } from '../AppWrapper/AppWrapepr.s';

export const HeaderWrapper = styled.div`
  border-top: 16px solid ${props => props.theme.colors.utils.text.dark};
  font-weight: 300;
  background-color: ${props => props.theme.colors.utils.background.mid};
  margin-bottom: 40px;
`;

export const StyledHeading = styled.h1`
  padding: 24px;
  margin: 0;
  color: ${props => props.theme.colors.utils.text.mid};
`;

export const StyledAppWrapper = styled(AppWrapperStyles)`
  align-items: flex-start;
`;
