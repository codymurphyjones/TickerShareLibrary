import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Footer } from './footer';

const stories = storiesOf('Components', module);

stories.add(
  'Footer',
  () => <Footer />,
  { info: { inline: true } }
);
