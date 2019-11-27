import React, { useContext } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Divider from '../divider/Divider'
import { GlobalContext } from '../../contexts/GlobalContext'
import data from '../../data/diagram.json'
import floorSelectedImage from '../../assets/floor-selected.png'

const Picker = () => {
    const { floorSelected, setFloorSelected } = useContext(GlobalContext)
    const floors = data.floors
    const floorsLength =  Object.keys(floors).length

    return (
        <View style = { styles.container }>
            {
                Object.keys(floors).map((key, index) => {
                    return (
                        <View key = { floors[key].id_floor }>
                            <TouchableOpacity
                                onPress = { () => setFloorSelected(key) }
                                style = { styles.itemContainer }>
                                <Text
                                    style = { floors[key].id_floor === floorSelected ? styles.itemSelected : styles.item } >
                                    { floors[key].name }
                                </Text>
                                { floors[key].id_floor === floorSelected ? <Image source = { floorSelectedImage } style = { styles.itemSelectedImage }/> : null }
                            </TouchableOpacity>
                            { (floorsLength - 1) !== index ? <Divider/> : null }
                        </View>
                    )
                })
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        height: 'auto',
        marginTop: 'auto',
        padding: 20
    },
    item: {
        fontSize: 16,
        letterSpacing: 1
    },
    itemContainer: {
        flexDirection: 'row'
    },
    itemSelected: {
        color: 'gold',
        fontSize: 16,
        fontWeight: 'bold',
        letterSpacing: 1
    },
    itemSelectedImage: {
        height: 20,
        marginLeft: 'auto',
        width: 20
    }
})

export default Picker