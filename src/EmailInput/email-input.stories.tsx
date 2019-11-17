import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { EmailInput } from './email-input';

const stories = storiesOf('Components', module);

stories.add(
  'EmailInput',
  () => <EmailInput />,
  { info: { inline: true } }
);
