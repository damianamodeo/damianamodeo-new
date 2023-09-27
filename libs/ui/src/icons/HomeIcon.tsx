import { VariantProps } from 'class-variance-authority';
import { className, style } from './style';

export function HomeIcon(props: VariantProps<typeof style>) {
  const classNameString = className(props);
  return (
    <svg
      className={classNameString}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="-1 -1 22 22"
    >
      <path
        // stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        // strokeWidth="2"
        d="M3 8v10a1 1 0 0 0 1 1h4v-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5h4a1 1 0 0 0 1-1V8M1 10l9-9 9 9"
      />
    </svg>
  );
}

export default HomeIcon;
