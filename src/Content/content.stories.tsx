import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Content } from './content';

const stories = storiesOf('Components', module);

stories.add(
  'Content',
  () => <Content />,
  { info: { inline: true } }
);
