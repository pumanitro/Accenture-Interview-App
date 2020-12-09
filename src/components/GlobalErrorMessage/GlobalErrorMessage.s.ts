import styled from 'styled-components';

type ErrorTooltipType = {
  width?: string;
};

export const ErrorTooltip = styled.div<ErrorTooltipType>`
  position: relative;
  display: inline-block;
  width: ${props => (props.width ? props.width : '100%')};
`;

export const ErrorTooltipText = styled.span`
  width: 240px;
  background-color: ${props => props.theme.colors.functional.error};
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  position: absolute;
  z-index: 1;
  top: 0px;
  left: calc(100% + 10px);

  // arrow
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    right: 100%;
    margin-top: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: transparent ${props => props.theme.colors.functional.error} transparent transparent;
  }
`;
