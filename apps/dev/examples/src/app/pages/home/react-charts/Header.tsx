import { Header } from '@ui2';
import { ChevronLeftIcon } from '@ui2';

type HeaderPageHeaderProps = {
  changeSubpage: (newSubpage: string, direction: '<' | '>') => void;
};

const HeaderComponent = ({ changeSubpage }: HeaderPageHeaderProps) => {
  //console.log('Header', `${'variable'}`)
  return (
    <Header
      left={
        <div
          className={`text-[2rem] m-auto`}
          onClick={() => changeSubpage('Home', '>')}
        >
          <ChevronLeftIcon />
        </div>
      }
      center={<div className={`text-center`}>Header</div>}
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
