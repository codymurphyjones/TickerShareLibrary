import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { SectionBlock } from './section-block';

const stories = storiesOf('Components', module);

stories.add(
  'SectionBlock',
  () => <SectionBlock />,
  { info: { inline: true } }
);
