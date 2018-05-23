# React Native Addon Knobs

Displays story knobs right inside the app.
**Currently this is WIP. To make it work we need to merge [3636](https://github.com/storybooks/storybook/pull/3636) [3635](https://github.com/storybooks/storybook/pull/3635) [3634](https://github.com/storybooks/storybook/pull/3634)**

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

*It is very important to have StorybookUI created before RNKnobs is rendered!*

```
