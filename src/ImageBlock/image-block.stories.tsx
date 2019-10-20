import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { ImageBlock } from './image-block';

const stories = storiesOf('Components', module);

stories.add(
  'ImageBlock',
  () => <ImageBlock />,
  { info: { inline: true } }
);
