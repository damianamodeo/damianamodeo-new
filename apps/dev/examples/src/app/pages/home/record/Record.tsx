import { docPaths, useFirestoreData } from '@/libs/services/src';
import { ContentProps, SearchForSuburb, SelectSuburb } from '@ui';

export function Record({ control }: ContentProps) {
  const options = useFirestoreData({ path: docPaths.maitland });

  return (
    <div className={`h-full dark:text-white center-h-col gap-2 p-2`}>
      <SelectSuburb></SelectSuburb>
      <SearchForSuburb></SearchForSuburb>
    </div>
  );
}

export default Record;
