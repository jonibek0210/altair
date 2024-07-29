'use client';

import { usePathname, useRouter } from "next/navigation";

export default function LocalSwitcher({ lang }) {
   const { push } = useRouter()
   const pathname = usePathname()

   const onSelectChange = (e) => {
      const nextLocale = e.target.value;
      push(`/${nextLocale}${pathname.slice(3)}`)
   };

   return (
      <label className='border-2 rounded select relative link'>
         <select
            defaultValue={lang}
            className='bg-transparent w-9 px-1 text-sm select cursor-pointer '
            onChange={onSelectChange}
         >
            <option value='ru'>Ru</option>
            <option value='uz'>Uz</option>
         </select>
      </label>
   );
}