import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import AlbumDetail from './AlbumDetail';


export default class AlbumList extends Component {

  constructor(props) {
    super(props);
    this.state = { ReactNativeAlbums: [] };
    this.renderReactNativeAlbums = this.renderReactNativeAlbums.bind(this);
  }

  componentWillMount() {
    console.log('Fetching Results');
    fetch('http://rallycoding.herokuapp.com/api/music_albums')
      .then(response => response.json())
        .then(results => {
          console.log(results);
          this.setState({ ReactNativeAlbums: results });
        })
          .catch(err => console.log(err));
  }

  renderReactNativeAlbums() {
    console.log('Rendering ReactNativeAlbums');
    return this.state.ReactNativeAlbums.map(album =>
      <AlbumDetail key={album.title} album={album} />
    );
  }

  render() {
    console.log('no');
    return (
      <ScrollView>
        {this.renderReactNativeAlbums()}
      </ScrollView>
    );
  }
}
