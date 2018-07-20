import React, {PureComponent} from 'react';
import {addons} from '@storybook/react-native';
import Panel from './panel';

export function register() {
  addons.register('RNKNOBS', () => {
    const channel = addons.getChannel();
    addons.addPanel('RNKNOBS', {
      title: 'Knobs',
      // eslint-disable-next-line react/prop-types
      render: (active) => <Panel channel={channel}/>,
    });
  });
}
