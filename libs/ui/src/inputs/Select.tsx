// 'use client';

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

export const Select = () => {
  return (
    <SelectRoot>
      <SelectTrigger className="w-[180px] focus:ring-offset-0">
        <SelectValue placeholder="Theme" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="light">Light</SelectItem>
        <SelectItem value="dark">Dark</SelectItem>
        <SelectItem value="system">System</SelectItem>
      </SelectContent>
    </SelectRoot>
  );
};
