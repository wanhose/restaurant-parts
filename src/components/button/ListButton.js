import React from 'react'
import { Image, StyleSheet, TouchableOpacity } from 'react-native'
import listTablesImage from '../../assets/list-tables.png'

const ListButton = (props) => {
    const {
        onPress,
    } = props

    return (
        <TouchableOpacity
            onPress = { onPress }
            style = { styles.container }>
            <Image
                source = { listTablesImage }
                style = { styles.image }/>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        paddingRight: 10
    },
    image: {
        height: 27.5,
        width: 27.5
    }
})

export default ListButton