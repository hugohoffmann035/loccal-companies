'use client'
import { ModalCuston } from '@/components/ModalCuston'
import { useModal } from '@/hooks/useModal'

type ModalContactPhoneProps = {
    is_open: boolean
}

export function ModalContactEmail({is_open}:ModalContactPhoneProps) {
    const { onCloseModal } = useModal()

    function handleCloseModal(){
        onCloseModal()
    }

    return (
        <ModalCuston
            is_open={is_open}
            onClose={handleCloseModal}
        >
            <div className='flex flex-col items-center space-y-3'>
                <div>
                    <h2 className='text-black text-[18px]'>E-mails para contato</h2>
                </div>
                <div className='flex flex-col items-center space-y-3'>
                    <span className='text-black text-[14px]'>hugo@hoffby.com.br</span>
                    <hr className='w-full' />
                    <span className='text-black text-[14px]'>contato@hoffby.com.br</span>
                </div>
            </div>
        </ModalCuston>
    )
}