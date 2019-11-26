import React from 'react'
import { StyleSheet, View } from 'react-native'
import { ReactNativeZoomableView } from '@dudigital/react-native-zoomable-view'


const Restaurant = () => {
    return (
        <View style = { styles.container }>
            <ReactNativeZoomableView
                bindToBorders = { true }
                initialZoom = { 0.9 }
                maxZoom = { 1.25 }
                minZoom = { 0.75 }
                zoomStep = { 0.25 }>
                { /** CONTENT **/  }
            </ReactNativeZoomableView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        overflow: 'hidden',
        padding: 10
    }
})

export default Restaurant