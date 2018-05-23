/* eslint-disable no-underscore-dangle */
import PropTypes from 'prop-types';
import {View, Text} from 'react-native';
import React from 'react';
import TypeMap from './types';

const InvalidType = () => <Text style={{margin: 10}}>Invalid Type</Text>;

export default class PropField extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { onChange, onPress, knob } = this.props;

    const InputType = TypeMap[knob.type] || InvalidType;

    return (
      <View>
         {!knob.hideLabel ? (
        <Text style={{
          marginLeft: 10,
          fontSize: 14,
          color: 'rgb(68, 68, 68)',
          fontWeight: 'bold',
                }}>
                  {`${knob.name}`}
                </Text>
         ) : null}
        <InputType knob={knob} onChange={onChange} onPress={onPress} />
      </View>
    );
  }
}

PropField.propTypes = {
  knob: PropTypes.shape({
    name: PropTypes.string,
    value: PropTypes.any,
  }).isRequired,
  onChange: PropTypes.func.isRequired,
  onPress: PropTypes.func.isRequired,
};
