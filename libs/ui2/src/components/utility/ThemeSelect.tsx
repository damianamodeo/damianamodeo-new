import { Select } from '@ui2';
import { useTernaryDarkMode } from 'usehooks-ts';

export function ThemeSelect({ lightThemeColor, darkThemeColor }: any) {
  const { ternaryDarkMode, setTernaryDarkMode } = useTernaryDarkMode();
  type TernaryDarkMode = typeof ternaryDarkMode;

  return (
    <div className={`dark:text-white flex`}>
      <Select
        options={[
          { id: 1, option: 'light' },
          { id: 2, option: 'dark' },
          { id: 3, option: 'auto' },
        ]}
        onSelect={({ option }: any) => {
          const body = document.querySelector('.body');

          option === 'light'
            ? body?.setAttribute('content', lightThemeColor)
            : option === 'dark'
            ? body?.setAttribute('content', darkThemeColor)
            : null;

          const light = document.querySelector('#light-theme');
          const dark = document.querySelector('#dark-theme');
          light?.setAttribute('content', lightThemeColor);
          dark?.setAttribute('content', darkThemeColor);
          option === 'light'
            ? dark?.setAttribute('content', lightThemeColor)
            : option === 'dark'
            ? light?.setAttribute('content', darkThemeColor)
            : null;

          setTernaryDarkMode(
            option === 'auto' ? 'system' : (option as TernaryDarkMode)
          );
        }}
        initialValue={{
          id: 0,
          option: `${ternaryDarkMode === 'system' ? 'auto' : ternaryDarkMode}`,
        }}
      >
        Theme
      </Select>
    </div>
  );
}

export default ThemeSelect;
