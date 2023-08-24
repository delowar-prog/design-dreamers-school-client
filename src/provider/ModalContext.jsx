import React, { createContext, useState } from 'react'
export const modalContext = createContext('')
const ModalContext = ({ children }) => {
    const [modal, setModal]=useState(false)
    const modalData={
        modal, setModal
    }
    return (
        <modalContext.Provider value={modalData}>
            {children}
        </modalContext.Provider>
    )
}

export default ModalContext