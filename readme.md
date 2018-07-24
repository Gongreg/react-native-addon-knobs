# React Native Addon Knobs

Displays story knobs right inside the app.

## Installation

First install the module

`npm install react-native-storybook-knobs`

Then import and display the addon

```
import RNKnobs from 'react-native-storybook-knobs'

....


render() {
  const StorybookUI = getStorybookUI()();
  ....
  return (
  <View>
    <RNKnobs/>
    {StorybookUI}
  </View>
  );
}

```

*It is very important to have StorybookUI created before RNKnobs is rendered!*


## Proposed usage

Currently there is a PR open: https://github.com/storybooks/storybook/pull/3903

If it passes the usage is going to be:

```
require('react-native-storybook-knobs/register').register();
```

You just add this code before rendering StorybookUI.


