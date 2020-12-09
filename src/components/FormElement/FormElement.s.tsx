import styled from 'styled-components';
import { Overline } from 'components/Overline/Overline.s';

export const FormElementWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;

  padding-right: 320px;
  padding-bottom: 12px;
`;

export const StyledOverline = styled(Overline)`
  // for all ovelines to be at the same end line |
  min-width: 160px;
`;
