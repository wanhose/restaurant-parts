import React, { useContext } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Divider from '../divider/Divider'
import { GlobalContext } from '../../contexts/GlobalContext'
import DataService from '../../services/DataService'
import floorSelectedImage from '../../assets/floor-selected.png'

const Picker = () => {
    const { floorSelected, setFloorSelected } = useContext(GlobalContext)
    const floors = DataService.getFloors()

    return (
        <View style = { styles.container }>
            {
                floors.map((floor, index) => {
                    return (
                        <View key = { floor.id_floor }>
                            <TouchableOpacity
                                onPress = { () => setFloorSelected(floor.id_floor) }
                                style = { styles.itemContainer }>
                                <Text
                                    style = { floor.id_floor === floorSelected ? styles.itemSelected : styles.item } >
                                    { floor.name }
                                </Text>
                                { floor.id_floor === floorSelected ? <Image source = { floorSelectedImage } style = { styles.itemSelectedImage }/> : null }
                            </TouchableOpacity>
                            { (floors.length - 1) !== index ? <Divider otherStyle = { styles.divider }/> : null }
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
        paddingHorizontal: 20
    },
    divider: {
        paddingVertical: 20
    },
    item: {
        fontSize: 16,
        letterSpacing: 1,
        paddingVertical: 20
    },
    itemContainer: {
        alignItems: 'center',
        flexDirection: 'row'
    },
    itemSelected: {
        color: 'gold',
        fontSize: 16,
        fontWeight: 'bold',
        letterSpacing: 1,
        paddingVertical: 20
    },
    itemSelectedImage: {
        height: 20,
        marginLeft: 'auto',
        width: 20
    }
})

export default Picker