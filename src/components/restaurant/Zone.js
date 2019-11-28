import React from 'react'
import { Dimensions, Image, StyleSheet, View } from 'react-native'
import woodFloorImage from '../../assets/wood-floor.png'

const scale = Dimensions.get('window').width

const Zone = (props) => {
    return (
        <View style = { styles.container }>
            <Image
                source = { woodFloorImage }
                style = { styles.background }/>
            { props.children }
        </View>
    )
}

const styles = StyleSheet.create({
    background: {
        height: '100%',
        resizeMode: 'repeat',
        width: '100%'
    },
    container: {
        flexGrow: 1,
        height: scale,
        width: scale
    }
})

export default Zone