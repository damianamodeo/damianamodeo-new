import { ContentProps, AddSuburb, SelectSuburb } from '@ui';

export function Mapbox({ control }: ContentProps) {
  return (
    <div className={`h-full dark:text-white center-h-col gap-2 p-2`}>
      <SelectSuburb></SelectSuburb>
      {/* <AddSuburb></AddSuburb> */}
    </div>
  );
}

export default Mapbox;
