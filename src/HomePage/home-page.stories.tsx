import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { TextStyleBlock } from './text-style-block';

const stories = storiesOf('Components', module);

stories.add(
  'TextStyleBlock',
  () => <TextStyleBlock />,
  { info: { inline: true } }
);
