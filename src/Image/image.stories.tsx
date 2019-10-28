import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Image } from './image';

const stories = storiesOf('Components', module);

stories.add(
  'Image',
  () => <Image />,
  { info: { inline: true } }
);
