import { ContentProps, Header } from '@ui2';
import { ChevronLeftIcon } from '@ui2';

type HeaderPageHeaderProps = {
  changeSubpage: (newSubpage: string, direction: '<' | '>') => void;
};

const HeaderComponent = ({ control }: ContentProps) => {
  //console.log('Header', `${'variable'}`)
  return (
    <Header
      left={
        <div className={`text-[2rem] m-auto`}>
          <ChevronLeftIcon />
        </div>
      }
      center={<div className={`text-center`}>Home</div>}
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

export default HeaderComponent;
