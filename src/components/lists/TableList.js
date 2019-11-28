import React, { useContext, useEffect } from 'react'
import { Alert, FlatList, StyleSheet, View } from 'react-native'
import Divider from '../divider/Divider'
import Swipeable from '../swipeable/CustomSwipeable'
import TableListItem from './TableListItem'
import { GlobalContext } from '../../contexts/GlobalContext'
import DataService from '../../services/DataService'

const TableList = () => {
    const { floorSelected } = useContext(GlobalContext)
    const zones = DataService.getZones(floorSelected)
    const tables = DataService.getTables(zones)

    _keyExtractor = (item) => `key-${item.id_table}`

    _renderItem = ({ item }) => (
        <Swipeable
            onSwipeLeft = { () => Alert.alert('This is a custom alert','You\'re checking table information.') }
            onSwipeRight = { () => Alert.alert('This is a custom alert', 'You\'re checking availability.') }>
            <TableListItem
                id = { item.id_table }
                title = { item.name_table }/>
        </Swipeable>
    )

    return (
        <View style = { styles.container }>
            <FlatList
                data = { tables }
                ItemSeparatorComponent = { Divider }
                keyExtractor = { _keyExtractor }
                renderItem = { _renderItem }
                scrollEnabled = { true }/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1
    }
})

export default TableList