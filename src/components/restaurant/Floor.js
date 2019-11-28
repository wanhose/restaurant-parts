import React from 'react'
import { StyleSheet, View } from 'react-native'

const Floor = (props) => {
    return (
        <View style = { styles.container }>
            { props.children }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1
    }
})

export default Floor