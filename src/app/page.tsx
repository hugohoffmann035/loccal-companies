"use client"

import { Header } from '@/components/Header'
import { CompanieList } from '@/components/CompanieList'
import { ModalContactPhone } from '@/components/ModalContactPhone'
import { ModalContactEmail } from '@/components/ModalContactEmail'
import { ModalCompanyDetails } from '@/components/ModalCompanyDetails'
import { ModalProvider, useModal } from '@/hooks/useModal'

function Base(){
  const { isOpenModal } = useModal()

  return (
    <div className='flex flex-col w-full items-center'>
      <Header />
      <CompanieList />
      <ModalContactPhone is_open={isOpenModal == 'contact_phone'} />
      <ModalContactEmail is_open={isOpenModal == 'contact_email'} />
      <ModalCompanyDetails is_open={isOpenModal == 'company_details'} />
    </div>
  )
}

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <ModalProvider>
        <Base />
      </ModalProvider>
    </main>
  )
}
