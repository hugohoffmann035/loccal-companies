import { Header } from '@/components/Header'
import { CompanieList } from '@/components/CompanieList'

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <Header />
      <CompanieList />
    </main>
  )
}
