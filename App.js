import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import {Ionicons} from '@expo/vector-icons'


const audioBookPlaylist = [
  {
    title: 'Hamlet - Act I',
    author: 'William Shakespeare',
    source: 'Librivox',
    uri:
      'https://ia800204.us.archive.org/11/items/hamlet_0911_librivox/hamlet_act1_shakespeare.mp3',
    imageSource:
      'http://www.archive.org/download/LibrivoxCdCoverArt8/hamlet_1104.jpg'
  },
  {
    title: 'Hamlet - Act II',
    author: 'William Shakespeare',
    source: 'Librivox',
    uri:
      'https://ia600204.us.archive.org/11/items/hamlet_0911_librivox/hamlet_act2_shakespeare.mp3',
    imageSource:
      'http://www.archive.org/download/LibrivoxCdCoverArt8/hamlet_1104.jpg'
  },
  {
    title: 'Hamlet - Act III',
    author: 'William Shakespeare',
    source: 'Librivox',
    uri:
      'http://www.archive.org/download/hamlet_0911_librivox/hamlet_act3_shakespeare.mp3',
    imageSource:
      'http://www.archive.org/download/LibrivoxCdCoverArt8/hamlet_1104.jpg'
  },
  {
    title: 'Hamlet - Act IV',
    author: 'William Shakespeare',
    source: 'Librivox',
    uri:
      'https://ia800204.us.archive.org/11/items/hamlet_0911_librivox/hamlet_act4_shakespeare.mp3',
    imageSource:
      'http://www.archive.org/download/LibrivoxCdCoverArt8/hamlet_1104.jpg'
  },
  {
    title: 'Hamlet - Act V',
    author: 'William Shakespeare',
    source: 'Librivox',
    uri:
      'https://ia600204.us.archive.org/11/items/hamlet_0911_librivox/hamlet_act5_shakespeare.mp3',
    imageSource:
      'http://www.archive.org/download/LibrivoxCdCoverArt8/hamlet_1104.jpg'
  }
]

export default class App extends React.Component {
 state = {
   isPlaying: false,
   playbackInstance: null,
   currentIndex: 0,
   volume: 1.0,
   isBuffering: false,
 }

 render(){
   return (
    <View style={styles.container}>
      <Image 
      style={styles.albumCover}
      source={{
        uri: 'http://www.archive.org/download/LibrivoxCdCoverArt8/hamlet_1104.jpg'
      }}
      />
      <View style={styles.controls}>
        <TouchableOpacity style={styles.control} onPress={()=> alert('Back button')}>
          <Ionicons name="android-skip-backward" size={48} color="#444"/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.control} onPress={()=> alert('Playbutton')}>
          {this.state.isPlaying ? (
            <Ionicons name="android-pause" size={48} color="#444"/>
          ):(
            <Ionicons name="android-play-circle" size={48} color="#444"/>
          )}
        </TouchableOpacity>
        <TouchableOpacity style={styles.control} onPress={()=> alert('Forward button')}>
          <Ionicons name="android-skip-forward" size={48} color="#444"/>
        </TouchableOpacity>
      </View>
    </View>
  );
 }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
