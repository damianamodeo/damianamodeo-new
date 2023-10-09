import { Moon, Sun } from 'lucide-react';

import { Button, Select } from '@ui';
import { useTheme } from '@services';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@radix-ui/react-dropdown-menu';

const options = [
  { label: 'Light', value: 'light' },
  { label: 'Dark', value: 'dark' },
  { label: 'Auto', value: 'system' },
];

export function ThemeSelect() {
  const { setTheme } = useTheme();

  const handleValueChange = (value: string) => {
    setTheme(value as 'light');
  };

  const getPlaceholderText = () => {
    switch (localStorage.getItem('theme')) {
      case 'light':
        return 'Light';
      case 'dark':
        return 'Dark';
      default:
        return 'Auto';
    }
  };

  return (
    <Select
      label="Theme"
      placeholder={getPlaceholderText()}
      options={options}
      onValueChange={handleValueChange}
    ></Select>
    // <DropdownMenu>
    //   <DropdownMenuTrigger asChild>
    //     <Button variant="outline" size="icon">
    //       <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
    //       <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    //       <span className="sr-only">Toggle theme</span>
    //     </Button>
    //   </DropdownMenuTrigger>
    //   <DropdownMenuContent align="end">
    //     <DropdownMenuItem onClick={() => setTheme('light')}>
    //       Light
    //     </DropdownMenuItem>
    //     <DropdownMenuItem onClick={() => setTheme('dark')}>
    //       Dark
    //     </DropdownMenuItem>
    //     <DropdownMenuItem onClick={() => setTheme('system')}>
    //       System
    //     </DropdownMenuItem>
    //   </DropdownMenuContent>
    // </DropdownMenu>
  );
}
