'use client'

type ModalCustonProps = {
    is_open?: boolean
    onConfirm?: () => void
    onClose?: () => void
    min_height?: string
    width?: string
    children: React.ReactElement
}

export function ModalCuston({
    is_open=false,
    onConfirm=()=>{ return },
    onClose=()=>{ return },
    min_height = '',
    width,
    children=<></>
}:ModalCustonProps){

    function handleClose(){
        onClose()
    }

    return (
        <div className={`absolute z-[999] top-0 left-0 right-0 bottom-0 bg-modal-overlay flex flex-col items-center justify-center ${is_open ? 'block': 'hidden'}`}>
            <div className="bg-white rounded-[5px] w-[500px] min-h-[300px] relative flex flex-col">
                <div className="flex flex-col w-full items-center mt-[15px]">
                    <h1 className="text-black text-[22px]">Hoffby</h1>
                </div>
                <div className="mt-[15px]">
                    {children}
                </div>
                <div className="flex flex-1 flex-col w-full items-center my-[15px] justify-end">
                    <button onClick={handleClose} className="bg-modal-btn-close h-[50px] px-[20px] text-white rounded-[5px]">Fechar</button>
                </div>
            </div>
        </div>
    )
}