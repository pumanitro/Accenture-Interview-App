import styled from 'styled-components';

// Flex direction can be easily extended in the future by using prop but right now it is not necessary
export const RadioGroupWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const RadioGroupElementWrapper = styled.div`
  padding-right: 12px;
`;

export const StyledRadioLabel = styled.label`
  margin-left: 4px;
`;
