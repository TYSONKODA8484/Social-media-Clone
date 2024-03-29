import { StyleSheet, Text, View, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import { COLORS, SIZES, images, FONTS } from '../constants';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import DotsView from '../components/DotsView';

const Welcome = () => {
  const [progress, setProgress] = useState(0);
  const navigation = useNavigation();

  useEffect(() => {
    const intervalid = setInterval(() =>{
        setProgress((prevProgress)=>{
          if(prevProgress >= 1){
            clearInterval(intervalid);
            return prevProgress;
          }

          return prevProgress + 0.1;
        })
    }, 1000 );

    return ()=> clearInterval(intervalid);
  },[]);

  useEffect(() =>{
    if(progress >=1){
      // navigate to feed screen
      navigation.navigate("BottomTabNavigation", {name:"Feed"} )
    }
  },[progress,navigation])


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.viewContainer}>
        <Image 
          source={images.hero}
          resizeMode='contain'
          style={styles.hero}
        />
        <View style={styles.textContainer}>
          <Text style={styles.welcome}>Welcome to</Text>
          <Text style={styles.instiX}>InstiX</Text>
        </View>
        <View style={styles.some}>
            {progress < 1 && <DotsView progress={progress}/>}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  viewContainer: {
    flex: 1,
    marginHorizontal: 22,
    // justifyContent: 'center', // Center vertically
    alignItems: 'center',
  },
  hero: {
    width: SIZES.width * 0.8,
    marginVertical: SIZES.padding2,
  },
  textContainer: {
    alignItems: 'center',
  },
  welcome: {
    ...FONTS.body3,
    marginBottom: SIZES.padding,
  },
  instiX: {
    ...FONTS.h1,
    marginBottom: SIZES.padding,
  },
  some:{
    alignItems: 'center',
    position: 'absolute',
    bottom: 100
  }
});
