import { Header, ChevronLeftIcon, ContentProps } from '@ui';

export function HomeHeader({ control }: ContentProps) {
  return (
    <Header
      left={
        <div
          className={`text-[2rem] m-auto`}
          onClick={() => control?.changePage({section: 'Home', page: 'Home', direction: '<'})}
        >
          <ChevronLeftIcon />
        </div>
      }
      center={
        <div className={`text-center`}>
          Proclaimer
        </div>
      }
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

export default HomeHeader;