import { ContentProps, SearchForSuburb } from '@ui';

export function Record({ control }: ContentProps) {
  return (
    <div className={`center h-full dark:text-white center-h-col gap-2 p-2`}>
      <SearchForSuburb></SearchForSuburb>
    </div>
  );
}

export default Record;
