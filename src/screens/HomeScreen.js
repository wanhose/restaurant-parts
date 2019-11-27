import React from 'react'
import { StatusBar, StyleSheet, View } from 'react-native'
import ChangeFloor from '../components/modals/ChangeFloor'
import FloatingButton from '../components/floatingButton/FloatingButton'
import ListButton from '../components/button/ListButton'
import Restaurant from '../components/restaurant/Restaurant'

const HomeScreen = () => {
    return (
        <View style = { styles.container }>
            <StatusBar backgroundColor = 'gold' barStyle = 'dark-content'/>
            <Restaurant/>
            <FloatingButton/>
            <ChangeFloor/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        flexGrow: 1
    }
})

HomeScreen.navigationOptions = ({ navigation }) => {
    return {
        headerTitle: 'RESTAURANT VIEWER',
        headerRight: <ListButton onPress = { () => navigation.navigate({ key: 'list', routeName: 'List' }) } />
    }
}

export default HomeScreen