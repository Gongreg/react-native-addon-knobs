import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {ScrollView, View, Text, TouchableOpacity} from 'react-native';

class GroupTabs extends Component {
  renderTab(name, group) {
    let { title } = group;
    if (typeof title === 'function') {
      title = title();
    }

    return (
        <TouchableOpacity style={{
            marginRight: 15,
            paddingBottom: 10,
        }} key={name} onPress={() => this.props.onGroupSelect(name)}>
      <Text
        style={{
            color: this.props.selectedGroup === name ? 'black' : '#ccc',
            fontSize: 17,
        }}
      >
        {title}
      </Text>
      </TouchableOpacity>
    );
  }

  render() {
    const entries = this.props.groups ? Object.entries(this.props.groups) : null;

    return entries && entries.length ? (
      <ScrollView horizontal style={{marginHorizontal: 10, flexDirection: 'row', marginBottom: 10, borderBottomWidth: 1, borderBottomColor: '#ccc'}}>
        {entries.map(([key, value]) => this.renderTab(key, value))}
      </ScrollView>
    ) : (
      <Text>no groups available</Text>
    );
  }
}

GroupTabs.defaultProps = {
  groups: {},
  onGroupSelect: () => {},
  selectedGroup: null,
};

GroupTabs.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  groups: PropTypes.object,
  onGroupSelect: PropTypes.func,
  selectedGroup: PropTypes.string,
};

export default GroupTabs;