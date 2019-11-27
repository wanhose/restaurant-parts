import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import Swipeable from 'react-native-gesture-handler/Swipeable'
import availabilityIcon from '../../assets/availability-icon.png'
import informationIcon from '../../assets/information-icon.png'

const LeftActions = () => {
    return (
        <View style = { styles.rightActionContainer }>
            <Text 
                style = { styles.actionText }>
                Check information
            </Text>
            <Image 
                source = { informationIcon }
                style = { styles.icon }/>
        </View>
    )
}

const RightActions = () => {
    return (
        <View style = { styles.leftActionContainer }>
            <Text 
                style = { styles.actionText }>
                Check availability
            </Text>
            <Image 
                source = { availabilityIcon }
                style = { styles.icon }/>
        </View>
    )
}

const CustomSwipeable = (props) => {
    const {
        onSwipeLeft,
        onSwipeRight
    } = props

    return (
        <Swipeable
            renderLeftActions = { LeftActions }
            renderRightActions = { RightActions }>
            { props.children }
        </Swipeable>
    )
}

const styles = StyleSheet.create({
    actionText: {
        color: 'white',
        fontSize: 18,
        letterSpacing: 1
    },
    icon: {
        height: 25,
        marginLeft: 10,
        width: 25
    },
    leftActionContainer: {
        alignItems: 'center',
        backgroundColor: '#00C853',
        flexDirection: 'row',
        flexGrow: 1,
        justifyContent: 'center'
    },
    rightActionContainer: {
        alignItems: 'center',
        backgroundColor: '#0091EA',
        flexDirection: 'row',
        flexGrow: 1,
        justifyContent: 'center'
    }
})

export default CustomSwipeable