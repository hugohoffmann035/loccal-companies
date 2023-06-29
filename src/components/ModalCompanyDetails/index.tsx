'use client'
import { ModalCuston } from '@/components/ModalCuston'
import { useModal } from '@/hooks/useModal'

type ModalContactPhoneProps = {
    is_open: boolean
}

export function ModalCompanyDetails({ is_open }: ModalContactPhoneProps) {
    const { onCloseModal } = useModal()

    function handleCloseModal(){
        onCloseModal()
    }

    return (
        <ModalCuston
            is_open={is_open}
            onClose={handleCloseModal}
        >
            <div>
                <div className='flex flex-col items-center space-y-3'>
                    <div>
                        <h2 className='text-black text-[18px]'>Mais informações sobre a empresa</h2>
                    </div>
                    <div className='flex flex-col items-center space-y-3'>
                        <span className='text-black text-[14px]'>Hoffby tecnologia ltda</span>
                        <span className='text-black text-[14px]'>44.532.586/0001-00</span>
                        <span className='text-black text-[14px]'>Tecnologia da informação</span>
                        <span className='text-black text-[14px]'>hoffby.com.br</span>
                    </div>
                </div>
                <div className='flex flex-col items-center space-y-3'>
                    <div>
                        <h2 className='text-black text-[18px]'>Contato</h2>
                    </div>
                    <div className='flex flex-col items-center space-y-3'>
                        <span className='text-black text-[14px]'>+55 (64) 992263914</span>
                        <span className='text-black text-[14px]'>contato@hoffby.com.br</span>
                    </div>
                </div>
                <div className='flex flex-col items-center space-y-3'>
                    <div>
                        <h2 className='text-black text-[18px]'>Endereço</h2>
                    </div>
                    <div className='flex flex-col items-center space-y-3'>
                        <span className='text-black text-[14px]'>Rua F-7 Qd.11 lt 10</span>
                        <span className='text-black text-[14px]'>Setor redentor - Jandaia (GO)</span>
                        <span className='text-black text-[14px]'>CEP: 75950-000</span>
                    </div>
                </div>
            </div>
        </ModalCuston>
    )
}