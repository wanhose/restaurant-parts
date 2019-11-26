import React, { useContext } from 'react'
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import { GlobalContext } from '../../contexts/GlobalContext'
import fbChangeFloorImage from '../../images/fb-change-floor.png'

const FloatingButton = () => {
    const { setIsModalVisible } = useContext(GlobalContext)

    return (
        <View style = { styles.container }>
            <TouchableOpacity
                onPress = { () => setIsModalVisible(true) }
                style = { styles.button }>
                <Image
                    source = { fbChangeFloorImage }
                    style = { styles.image }/>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        backgroundColor: 'gold',
        borderRadius: 60,
        elevation: 5,
        flexGrow: 1,
        justifyContent: 'center',
        height: 60,
        width: 60
    },
    container: {
        bottom: 15,
        position: 'absolute',
        right: 15
    },
    image: {
        height: 30,
        width: 30
    }
})

export default FloatingButton