import { CompanieItem } from '@/components/CompanieItem'

export function CompanieList() {
    return (
      <div className="flex flex-col w-[90%] sm:w-[80%] md:w-[60%] xl:w-[1120px] mt-[30px] space-y-[10px]">
        <CompanieItem />
        <CompanieItem />
        <CompanieItem />
        <CompanieItem />
        <CompanieItem />
        <CompanieItem />
        <CompanieItem />
        <CompanieItem />
      </div>
    )
  }
  