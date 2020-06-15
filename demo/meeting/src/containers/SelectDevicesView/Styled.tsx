import styled from 'styled-components';

export const StyledContainer = styled.div`
  display: grid;
  padding: 0.5rem;
  grid-template-columns: 20rem;
  grid-template-rows: repeat(7, auto);
  box-shadow: 0 0.25rem 0.5rem 0 rgba(0, 0, 0, 0.2),
    0 0.375rem 1.25rem 0 rgba(0, 0, 0, 0.2);
  border-radius: 0.25rem;
  grid-gap: 1rem;

  .item {
    padding-left: 0.5rem;
    display: flex;
    flex-direction: column;
    align-items: start;
  }

  .video-preview-container {
    grid-row: span 3;
  }

  video {
    max-width: 85%;
  }

  .audio-test {
    width: 75%;
  }

  @media (min-width: 768px) {
    max-width: 40rem;
    grid-template-columns: repeat(2, 20rem);
    grid-template-areas:
      'heading             heading'
      'microphone          audio-test'
      'camera              video-preview'
      'video-input-quality video-preview'
      'speaker             video-preview'
      'test-speaker        join'
      'footer              footer';

    h1 {
      text-align: center;
      grid-area: heading;
    }

    .microphone {
      grid-area: microphone;
    }

    .camera {
      grid-area: camera;
    }

    .audio-test {
      grid-area: audio-test;
    }

    .video-preview-container {
      grid-area: video-preview;
    }

    .test-speaker {
      grid-area: test-speaker;
    }

    .join-meeting {
      grid-area: join;
    }

    .footer {
      grid-area: footer;
    }
  }
`;
