import React from 'react'
import { StyleSheet, View } from 'react-native'

const Divider = () => {
    return (
        <View style = { styles.container }>
            <View style = { styles.divider }/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingBottom: 20,
        paddingTop: 20
    },
    divider: {
        borderTopColor: 'grey',
        borderTopWidth: 1,
        opacity: 0.5
    }
})

export default Divider