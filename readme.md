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
