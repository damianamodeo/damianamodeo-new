import { DexieDemo, PublisherForm } from '@ui2';

type DexiePageProps = {
  changeSubpage: (newSubpage: string, direction: '<' | '>') => void;
};

export function Dexie({ changeSubpage }: DexiePageProps) {
  //console.log('Dexie', `${variable}`)
  return (
    <div className={`h-full dark:text-white center-h-col gap-2 p-2`}>
      <PublisherForm></PublisherForm>
    </div>
  );
}

export default Dexie;
