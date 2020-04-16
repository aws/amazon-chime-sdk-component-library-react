import styled from 'styled-components';

import { RingProps } from './';

export const StyledRingOverlay = styled.div<RingProps>`
    display: flex;
    flex-direction: column;
    background-color: rgba(0, 0, 0, 0.3);
    text-align: center;
    width: 75%;
    max-width: 40rem;
    height: 15rem;
    justify-content: center;
    box-shadow: 0 1rem 2.5rem 0 rgba(0, 0, 0, 0.6);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 0.5rem;
`;

export const StyledAccept = styled.button`
    border: none;
    padding: 1rem 0;
    border-radius: 0.25rem;
    text-align: center;
    margin: 1rem 1rem;
    color: white;
    width: 30%;
    background-color: green;
    box-shadow: rgba(0, 0, 0, 0.2) 1px 3px 3px 0px;
`;

export const StyledDecline = styled(StyledAccept)`
    background-color: red;
`;

export const StyledClose = styled(StyledAccept)`
    align-self: flex-end;
    width: 20%;
    background-color: black;
`;
