import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import TableList from '../components/lists/TableList'

const ListScreen = () => {
    return (
        <View style = { styles.container }>
            <TableList/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1
    }
})

ListScreen.navigationOptions = {
    title: 'TABLES LIST'
}

export default ListScreen