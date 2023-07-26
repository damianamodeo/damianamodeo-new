import { EditLocalStorage, LocalStorageValues } from '@ui';

/* eslint-disable-next-line */
export interface LocalStorageProps {}

export function LocalStorage(props: LocalStorageProps) {
  return (
    <div className={`${null} h-full dark:text-white center-h-col gap-2 p-2`}>
      <EditLocalStorage></EditLocalStorage>
      <LocalStorageValues></LocalStorageValues>
    </div>
  );
}

export default LocalStorage;
