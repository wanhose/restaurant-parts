import React, { useContext } from 'react'
import { StyleSheet, View } from 'react-native'
import Modal from 'react-native-modal'
import Picker from '../picker/Picker'
import { GlobalContext } from '../../contexts/GlobalContext'

const ChangeFloor = () => {
    const { isModalVisible, setIsModalVisible } = useContext(GlobalContext)

    return (
        <Modal
            animationIn = 'slideInUp'
            animationOut = 'slideOutDown'
            backdropColor = 'grey'
            backdropOpacity = { 0.5 }
            isVisible = { isModalVisible }
            onBackdropPress = { () => setIsModalVisible(false) }
            style = { styles.modal }>
            <Picker/>
        </Modal>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1
    },
    modal: {
        margin: 0
    }
})

export default ChangeFloor