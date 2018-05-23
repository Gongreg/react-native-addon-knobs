import React, {PureComponent} from 'react';
import { Platform, KeyboardAvoidingView, Button, TouchableWithoutFeedback, Modal, View } from 'react-native';
import { getStorybookUI, configure } from '@storybook/react-native';
import addons from '@storybook/addons';
import Panel from './panel';

export default class RNKnobs extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      showKnobs: false,
    };
  }

  render() {

    const channel = addons.getChannel();

    return <View style={{flex: 1}}>
      <Button title="Knobs" onPress={() => this.setState({showKnobs: true})}/>
      <Modal visible={this.state.showKnobs} transparent onRequestClose={() => {this.setState({showKnobs: false})}}>
      <KeyboardAvoidingView behavior={(Platform.OS === 'ios')? "padding" : null} style={{flex: 1}}>
        <TouchableWithoutFeedback onPress={() => this.setState({showKnobs: false})}>
        <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0)', alignItems: 'center', justifyContent: 'flex-end', marginBottom: '2%'}}>
          <View style={{backgroundColor: 'white', width: '90%', maxHeight: '35%', flex: 1, borderWidth: 1, borderColor: 'black'}}>
        <Panel channel={channel}/>
        </View>
        </View>
        </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </Modal>
    </View>;
  }
}
