import {
  charactersAfterFirstComma,
  charactersBeforeComma,
  searchForMapboxSuburbDetails,
} from '@services';
import { useState } from 'react';
import { Combobox } from '@ui';

export const SearchForSuburb = () => {
  const [options, setOptions] = useState([]);

  const onInputChange = async (value: string) => {
    if (value.length < 4) return setOptions([]);
    const suburbData: any = await searchForMapboxSuburbDetails({
      searchString: value,
    });
    const optionsData = suburbData.map((data: any) => {
      return {
        label: charactersBeforeComma(data.place_name),
        value: data,
        menuItem: (
          <div>
            <p>{charactersBeforeComma(data.place_name)}</p>
            <p className="text-[0.7rem] text-grey-500">
              {charactersAfterFirstComma(data.place_name)}
            </p>
          </div>
        ),
        id: data.place_name,
      };
    });
    setOptions(optionsData);
  };

  return (
    <div className={`center h-full dark:text-white center-h-col gap-2 p-2`}>
      <Combobox
        placeholder="Search suburbs..."
        options={options}
        onInputChange={onInputChange}
        helptext="Start typing..."
        shouldNotFilter
        // emptySearchMessage={`${options.length === 0 ? "Keep typing..." : "dfgf"}`}
      ></Combobox>
    </div>
  );
};

export default SearchForSuburb;
