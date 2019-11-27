import React from 'react'
import { StyleSheet, View } from 'react-native'

const Divider = () => {
    return (
        <View style = { styles.divider }/>
    )
}

const styles = StyleSheet.create({
    divider: {
        borderTopColor: 'grey',
        borderTopWidth: 1,
        opacity: 0.5
    }
})

export default Divider