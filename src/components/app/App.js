import React from 'react'
import { Dimensions, StatusBar, StyleSheet, View } from 'react-native'
import { ReactNativeZoomableView } from '@dudigital/react-native-zoomable-view'
import Toolbar from '../toolbar/Toolbar'

const App = () => {
    return (
        <View style = { styles.container }>            
            <StatusBar backgroundColor = 'gold' barStyle = 'dark-content'/>
            <Toolbar/>
            <View style = { styles.contentWrapper }>
                <ReactNativeZoomableView
                    bindToBorders = { true }
                    initialZoom = { 0.9 }
                    maxZoom = { 1.25 }
                    minZoom = { 0.75 }
                    zoomStep = { 0.25 }>
                    { /** CONTENT **/  }
                </ReactNativeZoomableView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        flexGrow: 1
    },
    contentWrapper: {
        flexGrow: 1,
        overflow: 'hidden',
        padding: 10
    }
})

export default App