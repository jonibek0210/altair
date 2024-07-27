'use client';

import { usePathname, useRouter } from "next/navigation";

export default function LocalSwitcher({ lang }) {
   const { push } = useRouter()
   const pathname = usePathname()
   console.log(pathname.slice(3));

   const onSelectChange = (e) => {
      const nextLocale = e.target.value;
      push(`/${nextLocale}${pathname.slice(3)}`)
   };

   return (
      <label className='border-2 rounded'>
         <select
            defaultValue={lang}
            className='bg-transparent py-0.5 text-sm'
            onChange={onSelectChange}
         >
            <option value='ru'>Ru</option>
            <option value='uz'>Uz</option>
         </select>
      </label>
   );
}