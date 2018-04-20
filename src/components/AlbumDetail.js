import React from 'react';
import { Text, View, Image, Linking} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({ album }) => {
  const { title, artist, thumbnail_image, image, url } = album;
  const { HEADERCONTENTSTYLES,
    THUMBNAILSTYLES,
    TEXT,
    IMAGESTYLE,
    THUMBNAILCONTAINERSTYLES
   } = styles;

  return (
    <Card>
        <CardSection>
          <View style={THUMBNAILCONTAINERSTYLES}>
            <Image style={THUMBNAILSTYLES} source={{ uri: thumbnail_image }} />
          </View>
          <View style={HEADERCONTENTSTYLES}>
            <Text style={TEXT}>{title}</Text>
            <Text>{artist}</Text>
          </View>
        </CardSection>
        <CardSection>
          <Image style={IMAGESTYLE} source={{ uri: image }} />
        </CardSection>
        <CardSection>
          <Button
            onPress={() =>
              Linking.openURL(url).catch(err => console.log(err))
            }
          >
            Buy Now
          </Button>
        </CardSection>
    </Card>
  );
};

const styles = {
  HEADERCONTENTSTYLES: {
      flexDirection: 'column',
      justifyContent: 'space-around',
      flex: 1
  },
  THUMBNAILSTYLES: {
    height: 50,
    width: 50
  },
  TEXT: {
    fontSize: 20
  },
  THUMBNAILCONTAINERSTYLES: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  IMAGESTYLE: {
    flex: 1,
    height: 300,
    width: null
  }

};

export default AlbumDetail;
