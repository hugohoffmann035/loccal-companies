"use client"
import { createContext, useContext, useState } from 'react'

type ModalTypes = 'contact_phone' | 'contact_email' | 'company_details' | ''

type OpenModalProps = {
    type: ModalTypes
}

type ModalContextProps = {
    isOpenModal: ModalTypes
    onOpenModal: (props: OpenModalProps) => void
    onCloseModal: () => void
}

const ModalContext = createContext<ModalContextProps>({} as ModalContextProps)

type ModalProviderProps = {
    children: React.ReactElement
}

function ModalProvider({ children }: ModalProviderProps) {
    const [isOpenModal, setIsOpenModal] = useState<ModalTypes>('' as ModalTypes)

    function onOpenModal(props: OpenModalProps) {
        setIsOpenModal(props.type)
    }

    function onCloseModal() {
        setIsOpenModal('')
    }

    return (
        <ModalContext.Provider
            value={{
                onOpenModal,
                isOpenModal,
                onCloseModal
            }}
        >
            {children}
        </ModalContext.Provider>
    )
}

function useModal() {
    const context = useContext(ModalContext)
    return context
}

export { ModalProvider, useModal }