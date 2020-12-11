import styled, { css } from 'styled-components';

type ErrorTooltipType = {
  width?: string;
};

export const ErrorTooltip = styled.div<ErrorTooltipType>`
  position: relative;
  display: inline-block;
  width: ${props => (props.width ? props.width : '100%')};
`;

export type PositionType = 'right' | 'bottom';

type ErrorTooltipTextType = {
  // Can be extended in the future:
  position: PositionType;
};

const bottomPosition = css`
  top: calc(100% + 5px);
  left: calc(50% - 120px);
`;

const rightPosition = css`
  top: 0px;
  left: calc(100% + 10px);
`;

const bottomArrowPosition = css`
  bottom: 100%; /* At the bottom of the tooltip */
  left: 50%;
  margin-left: -5px;
  border-color: transparent transparent ${props => props.theme.colors.functional.error} transparent;
`;

const rightArrowPosition = css`
  top: 50%;
  right: 100%; /* To the left of the tooltip */
  margin-top: -5px;
  border-color: transparent ${props => props.theme.colors.functional.error} transparent transparent;
`;

export const ErrorTooltipText = styled.span<ErrorTooltipTextType>`
  width: 240px;
  background-color: ${props => props.theme.colors.functional.error};
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  position: absolute;
  z-index: 1;

  ${props => (props.position === 'right' ? rightPosition : bottomPosition)}

  // arrow
  &::after {
    content: '';
    position: absolute;

    ${props => (props.position === 'right' ? rightArrowPosition : bottomArrowPosition)}

    border-width: 5px;
    border-style: solid;
  }
`;
