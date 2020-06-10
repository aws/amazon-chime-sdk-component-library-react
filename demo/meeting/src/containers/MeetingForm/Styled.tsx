import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  max-width: 24rem;

  & > h1 {
    margin-top: 0;
  }

  & > .btn-submit {
    align-self: center;
  }
`;
