import React from 'react'
import { Image, Text, TouchableOpacity, StyleSheet, View } from 'react-native'
import restaurantTableImage from '../../assets/restaurant-table.png'

const TableListItem = (props) => {
    const {
        title = "NO_TITLE"
    } = props

    return (
        <View style = { styles.container }>
            <TouchableOpacity style = { styles.button }>
                <View style = { styles.iconContainer }>
                    <Image source = { restaurantTableImage } style = { styles.icon }/>
                </View>
                <Text style = { styles.text }>{ title }</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        flexDirection: 'row',
        flexGrow: 1,
    },
    container: {
        backgroundColor: 'white',
        padding: 15
    },
    icon: {
        height: 35,
        width: 35
    },
    iconContainer: {
        alignItems: 'center',
        backgroundColor: 'gold',
        borderRadius: 40,
        elevation: 2,
        height: 50,
        justifyContent: 'center',
        marginRight: 15,
        width: 50
    },
    text: {
        fontSize: 20
    }
})

export default TableListItem