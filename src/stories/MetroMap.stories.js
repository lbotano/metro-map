import React from 'react';
import { storiesOf } from '@storybook/react';

import { MetroMap } from '../';
import lines from './lines';

const stories = storiesOf('App Test', module);

stories.add('App', () => {
  return (
    <MetroMap width={600} height={360} lines={lines} />
  );
});
