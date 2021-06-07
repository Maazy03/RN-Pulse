/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image
} from 'react-native';
import Vector from './images/Vector.png'
// const Pulse = require('react-native-pulse');
import Pulse from 'react-native-pulse'
import PulseLoader from 'react-native-pulse-loader';
// import PulseAnim from 'react-native-pulse-anim';

const App = () => {
  const image =
  {
    source: {
      uri: 'https://cdn.pixabay.com/photo/2017/08/17/10/47/paris-2650808_960_720.jpg',
    }
  }
  const Vector1 = "https://cdn.pixabay.com/photo/2017/08/17/10/47/paris-2650808_960_720.jpg"
  console.log("CCC", Vector)
  return (
    <SafeAreaView >
      <View style={styles.sectionContainer}>
        <View style={{
          width: 100, height: 100, backgroundColor: "#0ECCA7",
          borderRadius: 100, display: "flex", justifyContent: "center", alignContent: "center", alignItems: "center",
          marginLeft: 100
        }}>
          <Pulse color='#0ECCA7' numPulses={3} diameter={250} speed={20} duration={1000}
            image={{
              source: Vector,
              style: {
                width: 50, height: 50, marginLeft: 100, marginTop: 95, borderRadius: 100
              }
            }}

          />

        </View>
      </View>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 332,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
