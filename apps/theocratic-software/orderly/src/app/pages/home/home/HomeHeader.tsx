import { Header } from '@ui';

type HomeHeaderPageHeaderProps = {
  changeSubpage: (newSubpage: string, direction: '<' | '>') => void;
};

const HomeHeader = ({ changeSubpage }: HomeHeaderPageHeaderProps) => {
  //console.log('HomeHeader', `${'variable'}`)
  return (
    <Header
      left={<div></div>}
      center={<div className={`text-center`}>Home</div>}
      right={<div></div>}
    />
  );
};

export default HomeHeader;
