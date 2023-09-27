import { ContentProps } from '@ui2';

export function LocalStorage({ control }: ContentProps) {
  return (
    <div className={`center h-full dark:text-white center-h-col gap-2 p-2`}>
      <div className={`null text-center`}>
        Current Section: {control?.state.section}
        <br />
        Current Page: {control?.state.page[control?.state.section]}
      </div>
    </div>
  );
}

export default LocalStorage;
