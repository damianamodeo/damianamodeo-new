import { ContentProps } from '@ui2';
import {
  Accordion,
  Button,
  Combobox,
  Dialog,
  Input,
  ScrollArea,
  Select,
  ThemeToggle,
} from '@ui';
import { useTernaryDarkMode } from 'usehooks-ts';

export function Home({ control }: ContentProps) {
  const pages = ['Local Storage', 'React PDF', 'React Charts', 'Nivo', 'Dexie'];
  const pages2 = ['Icons'];
  const { toggleTernaryDarkMode } = useTernaryDarkMode();

  return (
    <ScrollArea className={`h-full center-h`}>
      <div className={`center-h grid gap-8 p-2`}>
        <ThemeToggle></ThemeToggle>
        <Select></Select>
        <Button onClick={() => toggleTernaryDarkMode()}>Theme</Button>
        <Accordion></Accordion>
        <Combobox></Combobox>
        <Input type={`number`} placeholder="Number"></Input>
        <Dialog></Dialog>
      </div>
    </ScrollArea>
  );
}

export default Home;
