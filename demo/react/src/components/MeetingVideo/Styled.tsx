import styled from 'styled-components';

export const StyledMeetingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 80vh;
  margin: auto;

  h1 {
    font-size: 2rem;
    text-align: center;
  }
`;

export const StyledContainer = styled.div`
  position: relative;
  width: 100%;
`;

export const StyledVideoContainer = styled.div`
  .call-controls {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    margin: auto;

    button {
      width: 3rem;
      background: none;
      border: none;
    }
  }

  #attendee-video {
    &:before {
      padding-top: 75%;
    }
  }
  
  #self-video {
    position: absolute;
    bottom: 0;
    right: 0;
    height: 40%;
    width: 40%;
    background-color: black;
  }

  .nameplate {
    .text {
      font-size: 0.575rem;
    }
  }
`;

