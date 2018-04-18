import React, { Component } from 'react';

import {
  StyleSheet,
  View
} from 'react-native';

import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

type Props = {};

export default class App extends Component<Props> {
  render() {
    const { viewStyles, textStyles } = styles;
    return (
      <View>
        <View style={viewStyles}>
         <Header style={textStyles} title={'ReactNativeAlbums'} />
        </View>
        <AlbumList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewStyles: {
    backgroundColor: 'yellow',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    shadowOffset: { width: 10, height: 10 },
    shadowColor: 'black',
    shadowOpacity: 1.0,
    elevation: 5,
    position: 'relative'
  },
  textStyles: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black'
  }
});
