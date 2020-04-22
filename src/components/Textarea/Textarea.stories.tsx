import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';

import Textarea from './';

const Wrapper = styled.div`
  width: 30rem;
  margin: 10vh auto;
`;

storiesOf('Textarea', module)
.add('Textarea', () =>
  <Wrapper>
    <Textarea
      placeholder="text goes here"
      label="my test label"
      value={text("value", "some sample text")}
      onChange={() => console.log('changed')}
    />
  </Wrapper>
);
