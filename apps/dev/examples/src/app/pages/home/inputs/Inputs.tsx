import { Accordion, Combobox, ContentProps, Dialog, Input } from '@ui';

export function inputs({ control }: ContentProps) {
  return (
    <div className={`center h-full dark:text-white center-h-col gap-2 p-2`}>
      <div className={`center-h grid gap-8 p-2`}>
        <Accordion className='w-96'></Accordion>
        <Combobox ></Combobox>
        <Input type={`number`} placeholder="Number"></Input>
        <Dialog></Dialog>
      </div>
    </div>
  );
}

export default inputs;
