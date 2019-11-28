import React, { useContext, useEffect, useState } from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import { GlobalContext } from '../../contexts/GlobalContext'
import DataService from '../../services/DataService'

const SearchBar = () => {
    const { dispatch, floorSelected } = useContext(GlobalContext)
    const [ textSearched, setTextSearched ] = useState('')
    const zones = DataService.getZones(floorSelected)
    const tables = DataService.getTables(zones)

    useEffect(() => {
        if (textSearched === '') {
            dispatch({ type: 'SETUP', items: tables })
        } else {
            dispatch({ type: 'FILTER', text: textSearched, tables: tables })
        }
    }, [textSearched])

    return (
        <View style = { styles.container }>
            <View style = { styles.inputContainer }>
                <TextInput
                    onChangeText = { (text) => setTextSearched(text) }
                    placeholder = 'Search tables...'
                    selectionColor = 'gold'
                    style = { styles.input }
                    value = { textSearched }/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'gold',
        height: 50
    },
    input: {
        flexGrow: 1,
        paddingHorizontal: 20,
        letterSpacing: 1
    },
    inputContainer: {
        backgroundColor: 'white',
        borderRadius: 50,
        flexGrow: 1,
        marginBottom: 10,
        marginHorizontal: 10
    }
})

export default SearchBar