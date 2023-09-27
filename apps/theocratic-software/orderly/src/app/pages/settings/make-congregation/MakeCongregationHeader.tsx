import { Header, ChevronLeftIcon } from '@ui2';

type MakeCongregationHeaderPageHeaderProps = {
  changeSubpage: (newSubpage: string, direction: '<' | '>') => void;
};

const MakeCongregationHeader = ({
  changeSubpage,
}: MakeCongregationHeaderPageHeaderProps) => {
  //console.log('MakeCongregationHeader', `${'variable'}`)
  return (
    <Header
      left={
        <div
          className={`text-[2rem] m-auto`}
          onClick={() => changeSubpage('Settings', '>')}
        >
          <ChevronLeftIcon />
        </div>
      }
      center={<div className={`text-center`}>Make Congregation</div>}
      right={
        <div
          className={`text-[2rem] m-auto`}
          onClick={() => {
            return;
          }}
        ></div>
      }
    />
  );
};

export default MakeCongregationHeader;
