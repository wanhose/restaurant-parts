import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import tableBackgroundImage from '../../assets/table-background.png'

const Table = (props) => {
    const {
        name = 'NO_NAME',
        x = 0,
        y = 0
    } = props

    return (
        <View style = {{ ...styles.table, ...{left: x, top: y} }}>
            <Image
                source = { tableBackgroundImage }
                style = { styles.image }/>
            <View style = { styles.textContainer }>
                <Text style = { styles.text }>{ name.toUpperCase() }</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        borderRadius: 5,
        height: '100%',
        width: '100%'
    },
    table: {
        backgroundColor: 'white',
        borderRadius: 5,
        elevation: 5,
        height: 50,
        position: 'absolute',
        width: 50
    },
    text: {
        backgroundColor: 'black',
        color: 'gold',
        fontSize: 8,
        letterSpacing: 1
    },
    textContainer: {
        alignItems: 'center',
        bottom: 0,
        justifyContent: 'center', 
        left: 0,
        position: 'absolute',
        right: 0,
        top: 0
    }
})

export default Table