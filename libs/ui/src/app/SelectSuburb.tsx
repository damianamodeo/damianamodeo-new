import { useFirestoreData } from '@/libs/services/src';
import { AddSuburb, Select } from '@ui';
import { useState } from 'react';

type SelectSuburbProps = {
  children?: any;
};

export const SelectSuburb = ({ children }: SelectSuburbProps) => {
  const [value, setValue] = useState<string | undefined>(undefined);

  const [dialogOpen, setDialogOpen] = useState(false);

  const options =
    useFirestoreData({
      path: 'australia_nsw_maitland/map_data',
    })?.data || [];

  const handleValueChange = (value: string) => {
    if (value === 'add') {
      setDialogOpen(true);
      return;
    }
    setValue(value);
  };

  return (
    <div className={`${null} `}>
      <Select
        value={value}
        placeholder="Suburb"
        onValueChange={handleValueChange}
        options={[
          ...options?.map((suburb: { name: string }) => {
            return { value: suburb.name, label: suburb.name };
          }),
          {
            value: 'add',
            label: (
              <span className="text-blue-500 font-semibold">
                add new suburb
              </span>
            ),
          },
        ]}
      ></Select>
      <AddSuburb
        open={dialogOpen}
        setOpen={setDialogOpen}
        setValue={setValue}
      ></AddSuburb>
    </div>
  );
};

export default SelectSuburb;
