import styled from 'styled-components';

type ObjectFieldWrapperType = {
  width?: string;
};

export const ObjectFieldWrapper = styled.div<ObjectFieldWrapperType>`
  width: ${props => (props.width ? props.width : '100%')};
`;
