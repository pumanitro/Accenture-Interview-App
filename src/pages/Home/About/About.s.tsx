import styled from 'styled-components';
import { media } from 'global/RWD';

export const CenteredRowWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const CenteredWrapper = styled.div`
  display: flex;
  align-items: center;

  ${media.xs`
    flex-direction: column;
    align-items: flex-start;
  `}

  ${media.md`
    flex-direction: row;
    align-items: center;
  `}
`;

export const NumberFieldText = styled.span`
  margin-left: 12px;
`;
