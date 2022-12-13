import {StyleSheet, View, Image} from 'react-native'
import {Card, Text} from '@rneui/base'
import React from 'react'

const TrackItem = ({artworkUrl100, trackCensoredName, artistName}) => {
  return (
    <Card containerStyle={{marginTop: 10, alignItems: 'center'}}>
      <Card.Title h1>{artistName}</Card.Title>
      <Card.Divider />
      <Image style={styles.image} source={{uri: artworkUrl100}} />
      <Text h4 style={{textAlign: 'center'}}>{trackCensoredName}</Text>
    </Card>
  )
}

export default TrackItem

const styles = StyleSheet.create({
  image: {
    resizeMode: 'cover',
    width: 300,
    height: 200,
    textAlign: 'center'
  },
  
})
