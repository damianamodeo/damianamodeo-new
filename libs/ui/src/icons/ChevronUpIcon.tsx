import { VariantProps } from 'class-variance-authority';
import { className, style } from './style';

export function ChevronUpIcon(props: VariantProps<typeof style>) {
  const classNameString = className(props);
  return (
    <svg
      className={classNameString}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 10 6"
    >
      <path
        // stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        // strokeWidth="2"
        d="M9 5 5 1 1 5"
      />
    </svg>
  );
}

export default ChevronUpIcon;
