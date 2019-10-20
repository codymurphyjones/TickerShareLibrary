import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { HelloWorld } from './hello-world';

const stories = storiesOf('Components', module);

stories.add(
  'HelloWorld',
  () => <HelloWorld />,
  { info: { inline: true } }
);
