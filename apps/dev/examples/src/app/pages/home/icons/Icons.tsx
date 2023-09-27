import {
  CheckIcon,
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronSortIcon,
  ChevronUpIcon,
  ContentProps,
  GoogleIcon,
  HomeIcon,
  MessageIcon,
  PhoneIcon,
  SettingsIcon,
} from '@ui2';

export function Icons({ control }: ContentProps) {
  return (
    <div className={` h-full dark:text-white center-h-col gap-2 p-2`}>
      <div className={`${null} text-center`}>
        Current Section: {control?.state.section}
        <br />
        Current Page: {control?.state.page[control?.state.section]}
      </div>

      <div
        className={`w-full gap-4 grid grid-cols-[repeat(auto-fill,minmax(3.5rem,1fr))]`}
      >
        <div className={`${null} rounded center border p-2`}>
          <CheckIcon></CheckIcon>
        </div>
        <div className={`${null} rounded center border p-2`}>
          <ChevronDownIcon></ChevronDownIcon>
        </div>
        <div className={`${null} rounded center border p-2`}>
          <ChevronUpIcon></ChevronUpIcon>
        </div>
        <div className={`${null} rounded center border p-2`}>
          <ChevronLeftIcon></ChevronLeftIcon>
        </div>
        <div className={`${null} rounded center border p-2`}>
          <ChevronRightIcon></ChevronRightIcon>
        </div>
        <div className={`${null} rounded center border p-2`}>
          <ChevronSortIcon></ChevronSortIcon>
        </div>
        <div className={`${null} rounded center border p-2`}>
          <GoogleIcon></GoogleIcon>
        </div>
        <div className={`${null} rounded center border p-2`}>
          <HomeIcon></HomeIcon>
        </div>
        <div className={`${null} rounded center border p-2`}>
          <MessageIcon></MessageIcon>
        </div>
        <div className={`${null} rounded center border p-2`}>
          <PhoneIcon></PhoneIcon>
        </div>
        <div className={`${null} rounded center border p-2`}>
          <SettingsIcon></SettingsIcon>
        </div>
      </div>
    </div>
  );
}

export default Icons;
