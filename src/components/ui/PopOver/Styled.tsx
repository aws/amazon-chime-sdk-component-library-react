// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import styled from 'styled-components';
import { ellipsis } from '../../../utils/style';

export const StyledPopOverMenu = styled.ul`
  width: fit-content;
  max-width: 22rem;
  ${ellipsis};
  background-color: ${(props) => props.theme.popOver.menuBgd};
  border: ${(props) => props.theme.popOver.menuBorder};
  margin: 0;
  border-radius: 0.25rem;
  backdrop-filter: blur(1rem);
  list-style: none;
  padding: 0.5rem 0;
  box-shadow: ${(props) => props.theme.popOver.shadow};
  z-index: ${(props) => props.theme.zIndex.popOver};
`;

export const StyledPopOverToggle = styled.button`
  background-color: transparent;
  padding: 0;
  border: none;
  cursor: pointer;
  &:focus {
    outline: 0;
  }
`;

export const StyledPopOverItem = styled.li`
  height: 2rem;
  position: relative;

  button,
  a {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    border: none;
    cursor: pointer;
    background-color: ${(props) => props.theme.popOver.itemBgd};
    color: ${(props) => props.theme.popOver.itemText};
    line-height: ${(props) => props.theme.fontSizes.text.lineHeight};
    font-size: ${(props) => props.theme.fontSizes.text.fontSize};
    padding: 0 2.5rem;
    text-decoration: none;
    outline: 0;

    &:hover,
    &:focus {
      background-color: ${(props) => props.theme.popOver.active.itemBgd};
      color: ${(props) => props.theme.popOver.active.itemText};
      outline: 0;
    }
  }

  a {
    width: unset;
  }

  .ch-content > * {
    ${ellipsis};
  }

  .ch-check {
    position: absolute;
    left: 0.5rem;
    width: 1.5rem;
    height: 1.5rem;
    top: 0.33rem;
  }

  &:hover .ch-check g,
  &:focus .ch-check g {
    fill: ${(props) => props.theme.popOver.active.itemText};
  }
`;

export const StyledSubMenu = styled(StyledPopOverItem)`
  > span {
    width: 100%;
    height: 100%;
    display: block;
    height: 2rem;
  }

  > button {
    position: relative;
  }

  .ch-caret {
    position: absolute;
    width: 1.5rem;
    height: 1.5rem;
    right: 0;
    color: inherit;
    fill: inherit;
  }
`;

export const StyledPopOverHeader = styled.header`
  border-bottom: 0.0625rem solid ${(props) => props.theme.popOver.separator};
  margin-bottom: 0.75rem;

  img {
    width: 100%;
    display: inline-block;
    margin-top: -0.5rem;
    border-radius: 0.25rem 0.25rem 0 0;
  }

  img + .ch-title {
    margin-top: 0.75rem;
  }

  .ch-title {
    ${ellipsis};
    padding: 0 2.5rem;
    margin-top: 0.5rem;
    margin-bottom: 0;
    color: ${(props) => props.theme.popOver.titleText};
    font-size: 1.18125rem;
    line-height: ${(props) => props.theme.fontSizes.text.lineHeight};
  }

  .ch-subtitle {
    ${ellipsis};
    padding: 0 2.5rem;
    color: #616672;
    font-size: ${(props) => props.theme.fontSizes.text.fontSize};
    line-height: ${(props) => props.theme.fontSizes.text.lineHeight};
    line-height: 1.43;
    margin: 0 0 1rem;
  }
`;

export const StyledPopOverSeparator = styled.li`
  margin: 0;
  border-width: 0.0625rem 0 0 0;
  border-style: solid;
  border-color: ${(props) => props.theme.popOver.separator};
  margin-bottom: 0.75rem;
  opacity: 0.8;
`;
