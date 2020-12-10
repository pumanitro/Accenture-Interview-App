import styled from 'styled-components';
import { Overline } from 'components/Overline/Overline.s';
import { media } from 'global/RWD';

export const FormElementWrapper = styled.div`
  display: flex;

  flex-direction: column;

  ${media.xs`
    flex-direction: column;
    padding-right: 0;
  `}

  ${media.md`
    flex-direction: row;
    padding-right: 320px;
  `}

  flex-direction: row;
  justify-content: flex-start;

  padding-bottom: 12px;
`;

export const StyledOverline = styled(Overline)`
  // for all ovelines to be at the same end line |
  min-width: 160px;

  ${media.xs`
  margin-bottom: 12px;
  `}

  ${media.md`
  margin-bottom: 0;
  `}
`;
