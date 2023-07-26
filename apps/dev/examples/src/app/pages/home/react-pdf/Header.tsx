import { Header } from '@ui';
import { ChevronLeftIcon  } from '@ui';

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
        ><ChevronLeftIcon /></div>
      }
      center={<div className={`text-center`}>~</div>}
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