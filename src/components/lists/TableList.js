import React, { useContext, useEffect } from 'react'
import { FlatList, StyleSheet, View, Text } from 'react-native'
import Divider from '../divider/Divider'
import TableListItem from './TableListItem'
import { GlobalContext } from '../../contexts/GlobalContext'
import data from '../../data/diagram.json'

const TableList = () => {
    const { floorSelected } = useContext(GlobalContext)
    let tables = []
    let zones = []

    useEffect(() => {
        Object.keys(data.zones).map((key) => {
            let zone = data.zones[key]

            zone.floor === floorSelected ? zones.push(zone.id_zone) : null
        })

        Object.keys(data.tables).map((key) => {
            let table = data.tables[key]

            zones.indexOf(table.id_zone) > -1 ? tables.push(table) : null
        })
    })

    _keyExtractor = (item) => 'key-' + item.id_table

    _renderItem = ({ item }) => (
        <TableListItem 
            id = { item.id_table }
            title = { item.name_table }/>
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