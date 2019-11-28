import React, { useContext, useEffect } from 'react'
import { Alert, FlatList, StyleSheet, View } from 'react-native'
import Divider from '../divider/Divider'
import SearchBar from '../searchBar/SearchBar'
import Swipeable from '../swipeable/CustomSwipeable'
import TableListItem from './TableListItem'
import { GlobalContext } from '../../contexts/GlobalContext'
import DataService from '../../services/DataService'

const TableList = () => {
    const { dispatch, floorSelected, state } = useContext(GlobalContext)
    const zones = DataService.getZones(floorSelected)

    useEffect(() => {
        dispatch({ type: 'SETUP', items: DataService.getTables(zones) })
    }, [])

    const _keyExtractor = (item) => `key-${item.id_table}`

    const _renderItem = ({ item }) => (
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
                data = { state.tables }
                ItemSeparatorComponent = { Divider }
                keyExtractor = { _keyExtractor }
                ListHeaderComponent = { SearchBar }
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