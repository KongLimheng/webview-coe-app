import {
  Image,
  StyleSheet,
  Platform,
  View,
  StatusBar,
  Systrace,
} from 'react-native'

import { HelloWave } from '@/components/HelloWave'
import ParallaxScrollView from '@/components/ParallaxScrollView'
import { ThemedText } from '@/components/ThemedText'
import { ThemedView } from '@/components/ThemedView'
import WebView from 'react-native-webview'

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle={'dark-content'} />

      <WebView
        source={{ uri: 'http://172.17.120.46:3000' }}
        style={styles.webview}
        javaScriptEnabled={true}
        mediaPlaybackRequiresUserAction={false}
        allowsInlineMediaPlayback={true}
        allowsProtectedMedia={true}
        domStorageEnabled={true}
        onMessage={(event) => console.log(event, '===')}
        onError={(syntheticEvent) => {
          const { nativeEvent } = syntheticEvent
          console.log(nativeEvent)
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  webview: {
    flex: 1,
  },
})
