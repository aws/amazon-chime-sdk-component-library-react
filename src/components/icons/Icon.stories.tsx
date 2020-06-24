import React from 'react';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';

import {
  Arrow,
  Attendees,
  Camera,
  Caret,
  Caution,
  Check,
  CheckRound,
  Clock,
  Cog,
  Crown,
  DeskPhone,
  Dialer,
  Information,
  Laptop,
  Meeting,
  Microphone,
  Phone,
  Plus,
  Presenter,
  Record,
  Remove,
  ScreenShare,
  Search,
  Share,
  Sound,
} from './';

export default {
  title: 'Icons',
};

export const _Arrow = () => (
  <Arrow
    direction={select(
      'direction',
      { up: 'up', right: 'right', down: 'down', left: 'left' },
      'down'
    )}
    width={text('width', '2rem')}
  />
);

export const _Attendees = () => <Attendees width={text('width', '2rem')} />;

export const _Camera = () => (
  <Camera disabled={boolean('disabled', false)} width={text('width', '2rem')} />
);

export const _Caret = () => (
  <Caret
    direction={select(
      'direction',
      { up: 'up', right: 'right', down: 'down', left: 'left' },
      'down'
    )}
    width={text('width', '2rem')}
  />
);

export const _Caution = () => <Caution width={text('width', '2rem')} />;
export const _Check = () => <Check width={text('width', '2rem')} />;
export const _CheckRound = () => <CheckRound width={text('width', '2rem')} />;
export const _Clock = () => <Clock width={text('width', '2rem')} />;
export const _Cog = () => <Cog width={text('width', '2rem')} />;
export const _Crown = () => <Crown width={text('width', '2rem')} />;

export const _DeskPhone = () => (
  <DeskPhone disabled={boolean('disabled', false)} width={text('width', '2rem')} />
);

_DeskPhone.story = {
  name: 'DeskPhone',
};

export const _Information = () => <Information width={text('width', '2rem')} />;
export const _Laptop = () => <Laptop width={text('width', '2rem')} />;
export const _Meeting = () => <Meeting width={text('width', '2rem')} />;

export const _Microphone = () => (
  <Microphone disabled={boolean('disabled', false)} width={text('width', '2rem')} />
);

export const _Phone = () => <Phone width={text('width', '2rem')} />;
export const _Plus = () => <Plus width={text('width', '2rem')} />;
export const _Presenter = () => <Presenter width={text('width', '2rem')} />;
export const _Record = () => <Record width={text('width', '2rem')} />;
export const _Remove = () => <Remove width={text('width', '2rem')} />;
export const _ScreenShare = () => <ScreenShare width={text('width', '2rem')} />;

_ScreenShare.story = {
  name: 'ScreenShare',
};

export const _Search = () => <Search width={text('width', '2rem')} />;
export const _Share = () => <Share width={text('width', '2rem')} />;
export const _Sound = () => <Sound width={text('width', '2rem')} />;
