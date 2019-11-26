import React, { createContext, useState } from 'react'

export const GlobalContext = createContext({})

export const GlobalProvider = (props) => {
    const [isModalVisible, setIsModalVisible] = useState(false)
    const [floorSelected, setFloorSelected] = useState('201')

    return (
        <GlobalContext.Provider value = {{ floorSelected, isModalVisible, setFloorSelected, setIsModalVisible }}>
            { props.children }
        </GlobalContext.Provider>
    )
}