import React, { useContext, useEffect } from 'react'
import { ScrollView, StyleSheet, Text, View, YellowBox } from 'react-native'
import ViewTransformer from 'react-native-easy-view-transformer'
import Floor from './Floor'
import Table from './Table'
import Zone from './Zone'
import { GlobalContext } from '../../contexts/GlobalContext'
import DataService from '../../services/DataService'

const Restaurant = () => {
    const { floorSelected } = useContext(GlobalContext)
    const zones = DataService.getZones(floorSelected)
    const tables = DataService.getTables(zones)

    useEffect(() => {
        YellowBox.ignoreWarnings([
            'Warning: componentWillMount has been renamed'
        ]);
    }, [])

    return (
        <ScrollView
            contentContainerStyle = { styles.container }>
            <ViewTransformer
                maxScale = { 3 }
                style = {{ marginTop: 'auto' }}>
                <Floor>
                    {
                        zones.map((zone) => {
                            return (
                                <View key = { `key-${zone.id_zone}` }>
                                    <Text style = { styles.text }>{ zone.name.toUpperCase() }</Text>
                                    <Zone>
                                        {
                                            tables.map((table) => {
                                                return (
                                                        <Table
                                                            key = { `key-${table.id_table}` }
                                                            name = { table.name_table }
                                                            x = { parseInt(table.x) }
                                                            y = { parseInt(table.y) }/>
                                                )
                                            })
                                        }
                                    </Zone>
                                </View>
                            )
                        })
                    }
                </Floor>
            </ViewTransformer>
        </ScrollView>
            
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center',
        overflow: 'hidden'
    },
    text: {
        backgroundColor: 'black',
        color: 'gold',
        fontSize: 14,
        letterSpacing: 1,
        paddingVertical: 5,
        textAlign: 'center'
    }
})

export default Restaurant