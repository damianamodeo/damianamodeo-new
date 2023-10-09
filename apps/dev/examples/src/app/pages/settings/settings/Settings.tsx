import { ContentProps, ThemeSelect } from '@ui';

export function Settings({ control }: ContentProps) {
  return (
    <div className={`center h-full dark:text-white center-h-col gap-2 p-2`}>
      <ThemeSelect></ThemeSelect>
    </div>
  );
}

export default Settings;
