import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Toolbar = () => {
    return (
        <View style = { styles.container }>
            <Text style = { styles.text }>RESTAURANT VIEWER</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'gold',
        height: 60,
        width: '100%'
    },
    text: {
        flexGrow: 1,
        fontSize: 16,
        fontWeight: 'bold',
        letterSpacing: 1,
        textAlign: 'center',
        textAlignVertical: 'center'
    }
})

export default Toolbar