import styled from 'styled-components';

export const StyledWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 65rem;
  height: auto;
  padding: 1rem 0 3rem 0;

  > * {
    flex-basis: auto;
  }

  @media (min-width: 900px) {
    flex-direction: row;
    padding: 2.5rem 0 6rem 0;

    > * {
      flex-basis: 50%;
    }

    @media (max-height: 800px) {
      padding: 2rem 0 2rem;
    }
  }
`;

export const StyledAudioGroup = styled.div`
  padding: 0 3rem 0 0;
  border-right: 0.125rem solid #e6e6e6;

  @media (max-width: 900px) {
    padding: 2rem 0 2rem 0;
    border-right: unset;
  }
`;

export const StyledVideoGroup = styled.div`
  padding: 0 0 0 3rem;

  @media (max-width: 900px) {
    padding: 0;
  }
`;

export const StyledInputGroup = styled.div`
  margin-bottom: 1.5rem;
`;

export const StyledVideoPreview = styled.video`
  width: 100%;
  height: auto;
  border-radius: 0.1875rem;
  background-color: #1c1c1c;
`;

export const StyledPreviewGroup = styled.div`
  margin-bottom: 2.5rem;
`;

export const title = `
  text-transform: uppercase;
  font-size: 1rem !important;
  margin-bottom: 1.75rem;
`;

export const inputGroup = `
  margin-bottom: 1.25rem;
`;
