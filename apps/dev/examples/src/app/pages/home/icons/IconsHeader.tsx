import { Header, ChevronLeftIcon, ContentProps } from '@ui';

export function IconsHeader({ control }: ContentProps) {
  return (
    <Header
      left={
        <div
          className={`text-[2rem] m-auto`}
          onClick={() =>
            control?.changePage({
              section: 'Home',
              page: 'Home',
              direction: '<',
            })
          }
        >
          <ChevronLeftIcon />
        </div>
      }
      center={
        <div className={`text-center`}>
          {control?.state.page[control?.state.section]}
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
}

export default IconsHeader;
