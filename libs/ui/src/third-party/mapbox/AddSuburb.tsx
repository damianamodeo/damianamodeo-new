import {
  charactersAfterFirstComma,
  charactersBeforeComma,
  docPaths,
  writeFirebaseDoc,
  searchForMapboxSuburbDetails,
  updateDocProperty,
  writeNewDoc,
} from '@services';
import { useState } from 'react';
import { Button, Combobox, Dialog } from '@ui';

let optionsData: any = [];

export const AddSuburb = ({ open, setOpen, setValue }: any) => {
  const [options, setOptions] = useState([]);
  const [suburbData, setSuburbData] = useState(
    {} as {
      bbox?: number[];
      place_name: string;
    }
  );

  const onInputChange = async (value: string) => {
    if (value.length < 3) return setOptions([]);
    optionsData = await searchForMapboxSuburbDetails({
      searchString: value,
    });
    const data = optionsData.map((data: any) => {
      return {
        label: charactersBeforeComma(data.place_name),
        value: data.place_name,
        element: (
          <div>
            <p>{charactersBeforeComma(data.place_name)}</p>
            <p className="text-[0.7rem] text-grey-500">
              {charactersAfterFirstComma(data.place_name)}
            </p>
          </div>
        ),
      };
    });
    setOptions(data);
  };

  const onSelect = (value: string) => {
    const selectedSuburbData = optionsData.find(
      ({ place_name }: { place_name: string }) => {
        return place_name === value;
      }
    );
    setSuburbData({
      place_name: charactersBeforeComma(selectedSuburbData.place_name),
      bbox: selectedSuburbData.bbox,
    });
  };

  const handleSubmit = async () => {
    const writtenData = await writeFirebaseDoc({
      path: 'australia_nsw_maitland/map_data',
      data: ({ existingData, documentExists }) => {
        // If document doesnt exist
        if (!documentExists) {
          console.log('First suburb will be added.');
          return {
            data: [
              {
                name: suburbData.place_name,
                bbox: suburbData.bbox,
                streets: [],
              },
            ],
          };
        }

        // If suburb already exists
        if (
          existingData?.data.some(
            (suburb: any) => suburb.name === suburbData.place_name
          )
        ) {
          console.log('Suburb already exists');
          return { ...existingData };
        }

        // New suburb in existing document
        const newData = [
          ...existingData?.data,
          {
            name: suburbData.place_name,
            bbox: suburbData.bbox,
            streets: [],
          },
        ].sort((a, b) => {
          return a.name.localeCompare(b.name);
        });

        console.log('Suburb sent to be added');

        return {
          ...existingData,
          data: [...newData],
        };
      },
    });
    setValue(suburbData.place_name);
    setOpen(false);
  };

  return (
    <Dialog
      title="Add New Suburb"
      className="h-48"
      open={open}
      setOpen={setOpen}
    >
      <p className={`center-h-col gap-6`}>
        <Combobox
          placeholder="Search suburbs..."
          options={options}
          onInputChange={onInputChange}
          onSelect={onSelect}
          helptext="Start typing..."
          shouldNotFilter
        ></Combobox>
        {suburbData.place_name && (
          <Button variant={'outline'} onClick={handleSubmit}>
            Submit
          </Button>
        )}
      </p>
    </Dialog>
  );
};

export default AddSuburb;
