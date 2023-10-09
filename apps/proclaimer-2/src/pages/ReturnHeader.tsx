import { Header, ChevronLeftIcon, ContentProps } from '@ui';

export function ReturnHeader({ control }: ContentProps) {
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
          Return
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

export default ReturnHeader;