import Header from '@CONTAINERS/Header';
import { ChevronLeftIcon } from '@ui2';

type RecordHeaderType = {
  changeSubpage: (newSubpage: string, direction: '<' | '>') => void;
};

const RecordHeader = ({ changeSubpage }: RecordHeaderType) => {
  return (
    <Header
      left={
        <div
          className="flex stroke-blue-700 fill-none dark:stroke-blue-400 text-blue-700 dark:text-blue-400 stroke-[2] "
          onClick={() => changeSubpage('Settings', '>')}
        >
          <div className="text-[2rem] m-auto">
            <ChevronLeftIcon />
          </div>
          <div className="my-auto">Back</div>
        </div>
      }
      center={<div className={``}>Appearance</div>}
      right={<div></div>}
    ></Header>
  );
};

export default RecordHeader;
