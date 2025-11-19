import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import profilePic from '/Users/uttamk/Documents/mobile app development/trainer-search-app/tabview/assets/profile_pic.png';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text>Hi! My name is Uttam!</Text>
      <Image source={profilePic} style={styles.profilePic} />
      <text></text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1, 
    backgroundColor: '#f7f59dff',
  },
  profilePic: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginTop: 20,
  }
})