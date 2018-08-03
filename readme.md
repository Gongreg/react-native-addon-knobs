# React Native Addon Knobs

Displays story knobs right inside the app.
Currently this is created for PR: https://github.com/storybooks/storybook/pull/3903 
When PR is merged you will be able to use this in your app.

## Installation

First install the module

`npm install react-native-storybook-knobs`

Add this line to rn-addons.js 

```
require('react-native-storybook-knobs/register');
```

If you don't use rn-addons.js yet add this line next to getStorybookUI call 

```
require('./rn-knobs');
```
