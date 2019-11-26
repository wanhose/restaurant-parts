import React from 'react'
import { StatusBar, StyleSheet, View } from 'react-native'
import { GlobalProvider } from '../../contexts/GlobalContext'
import ChangeFloor from '../modals/ChangeFloor'
import FloatingButton from '../floatingButton/FloatingButton'
import Restaurant from '../restaurant/Restaurant'
import Toolbar from '../toolbar/Toolbar'

const App = () => {
    return (
        <View style = { styles.container }>
            <StatusBar backgroundColor = 'gold' barStyle = 'dark-content'/>
            <Toolbar/>
            <GlobalProvider>
                <Restaurant/>
                <FloatingButton/>
                <ChangeFloor/>
            </GlobalProvider>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        flexGrow: 1
    }
})

export default App