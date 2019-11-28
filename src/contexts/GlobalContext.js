import React, { createContext, useReducer, useState } from 'react'

let tableReducer = (state, action) => {
    switch (action.type) {
        case 'CLEAN':
            return { tables: [] }
        case 'FILTER':
            return { tables: action.tables.filter((table) => table.name_table.toLowerCase().includes(action.text.toLowerCase())) }
        case 'SETUP':
            return { tables: action.items }
    }
}

export const GlobalContext = createContext({})

export const GlobalProvider = (props) => {
    const [isModalVisible, setIsModalVisible] = useState(false)
    const [floorSelected, setFloorSelected] = useState('201')
    const [state, dispatch] = useReducer(tableReducer, {
        tables: []
    })

    return (
        <GlobalContext.Provider value = {{ 
                dispatch, 
                floorSelected, 
                isModalVisible,
                setFloorSelected,
                setIsModalVisible,
                state 
            }}>
            { props.children }
        </GlobalContext.Provider>
    )
}