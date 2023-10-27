// 'use client';

import { ReactNode } from 'react';
import {
  Select as SelectRoot,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
} from '../shadcn/select';
import { Label } from '@ui';

type Props = {
  label?: string;
  options: { label: string | ReactNode; value: string }[];
  placeholder?: string;
  onValueChange: (value: string) => void;
  value: string | undefined;
};

export const Select = ({
  options,
  placeholder = 'select',
  onValueChange,
  label,
  value,
}: Props) => {
  return (
    <div className="grid gap-1">
      {label && <Label className="">{label}</Label>}
      <SelectRoot onValueChange={onValueChange} value={value}>
        <SelectTrigger
          id={label}
          className="w-[180px] focus:ring-offset-0 dark:text-white"
        >
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {options.map((option) => {
            return (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            );
          })}
        </SelectContent>
      </SelectRoot>
    </div>
  );
};
