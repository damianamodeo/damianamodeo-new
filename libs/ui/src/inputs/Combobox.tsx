'use client';

import * as React from 'react';
import { Check, ChevronsUpDown } from 'lucide-react';

import { cn } from '@services';
import { Button } from '../shadcn/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from '../shadcn/command';
import { Popover, PopoverContent, PopoverTrigger } from '../shadcn/popover';

const defaultOptions = [
  {
    value: 'next.js',
    label: 'Next.js',
  },
  {
    value: 'sveltekit',
    label: 'SvelteKit',
  },
  {
    value: 'nuxt.js',
    label: 'Nuxt.js',
  },
  {
    value: 'remix',
    label: 'Remix',
  },
  {
    value: 'astro',
    label: 'Astro',
  },
];

type Props = {
  placeholder?: string;
  options?:
    | {
        value: string;
        label: string;
        element?: React.ReactNode;
      }[]
    | [];
  emptySearchMessage?: string | React.ReactNode;
  onSelect?: (value: string) => void;
  onInputChange?: (value: string) => void;
  helptext?: string;
  shouldNotFilter?: boolean;
};

export function Combobox({
  placeholder = "Select options...",
  options = defaultOptions,
  emptySearchMessage,
  onSelect = (value) => console.log(value),
  onInputChange,
  helptext,
  shouldNotFilter = false,
}: Props) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState('');
  const [label, setLabel] = React.useState('');

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {value
            ? options.find((option) => {
                return option.value === value;
              })?.label || label
            : placeholder}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command loop shouldFilter={!shouldNotFilter}>
          <CommandInput
            placeholder={helptext || placeholder}
            onValueChange={onInputChange}
          />
          {emptySearchMessage && (
            <CommandEmpty>{emptySearchMessage}</CommandEmpty>
          )}
          <CommandGroup>
            {options.map((option, index) => (
              <CommandItem
                key={option.value}
                onSelect={(currentValue) => {
                  onSelect(option.value);
                  setValue(currentValue === value ? '' : option.value);
                  setLabel(option.label);
                  setOpen(false);
                }}
              >
                <Check
                  className={cn(
                    'mr-2 h-4 w-4',
                    value === option.value ? 'opacity-100' : 'opacity-0'
                  )}
                />
                {option.element ? option.element : option.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

// 'use client';

// import { Check, ChevronsUpDown } from 'lucide-react';

// import { cn } from '@services';
// import { Button } from '../shadcn/button';
// import {
//   Command,
//   CommandEmpty,
//   CommandGroup,
//   CommandInput,
//   CommandItem,
// } from '../shadcn/command';
// import { Popover, PopoverContent, PopoverTrigger } from '../shadcn/popover';
// import { ReactNode, useState } from 'react';

// const initialOptions = [
//   {
//     value: 'next.js',
//     label: 'Next.js',
//     menuItem: 'Next.js',
//   },
//   {
//     value: 'sveltekit',
//     label: 'SvelteKit',
//     menuItem: 'SvelteKit',
//   },
//   {
//     value: 'nuxt.js',
//     label: 'Nuxt.js',
//     menuItem: 'Nuxt.js',
//   },
//   {
//     value: 'remix',
//     label: 'Remix',
//     menuItem: 'Remix',
//   },
//   {
//     value: 'astro',
//     label: 'Astro',
//     menuItem: 'Astro',
//   },
// ];

// type ComboboxType = {
//   placeholder?: string;
//   options?:
//     | {
//         value: string | number | object;
//         label: string;
//         menuItem: string | ReactNode;
//         id?: string | number;
//       }[]
//     | [];
//   emptySearchMessage?: string | ReactNode;
//   onSelect?: (value: string | number | object) => void;
//   onInputChange?: (value: string) => any;
//   helptext?: string;
//   shouldNotFilter?: boolean;
// };

// export function Combobox({
//   placeholder = 'Placeholder',
//   options = initialOptions,
//   emptySearchMessage,
//   onSelect = (value: string | number | object) => {
//     return;
//   },
//   onInputChange,
//   helptext,
//   shouldNotFilter = false,
// }: ComboboxType) {
//   const [open, setOpen] = useState(false);
//   const [value, setValue] = useState<string | ReactNode | number | object>('');

//   return (
//     <Popover open={open} onOpenChange={setOpen}>
//       <PopoverTrigger asChild>
//         <Button
//           variant="outline"
//           role="combobox"
//           aria-expanded={open}
//           className="w-[200px] justify-between"
//         >
//           {value
//             ? options?.find((option) => {
//                 return option.value === value;
//               })?.label
//             : placeholder}
//           <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
//         </Button>
//       </PopoverTrigger>
//       <PopoverContent className="w-[200px] p-0">
//         <Command loop shouldFilter={!shouldNotFilter}>
//           <CommandInput
//             placeholder={helptext || placeholder}
//             onValueChange={onInputChange}
//           />
//           {emptySearchMessage && (
//             <CommandEmpty>{emptySearchMessage}</CommandEmpty>
//           )}
//           <CommandGroup>
//             {options?.map((option) => (
//               <CommandItem
//                 key={option.id || option.label}
//                 onSelect={() => {
//                   setValue(option.value);
//                   setOpen(false);
//                   onSelect(option.value);
//                 }}
//               >
//                 <Check
//                   className={cn(
//                     'mr-2 h-4 w-4',
//                     value === option.value ? 'opacity-100' : 'opacity-0'
//                   )}
//                 />
//                 {option.menuItem}
//               </CommandItem>
//             ))}
//           </CommandGroup>
//         </Command>
//       </PopoverContent>
//     </Popover>
//   );
// }
