import { VariantProps } from 'class-variance-authority';
import { className, style } from './style';

export function ChevronLeftIcon(props: VariantProps<typeof style>) {
  return (
    <svg
      className={`${className(props)}`}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 6 10"
    >
      <path
        // stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        // strokeWidth="2"
        d="M5 1 1 5l4 4"
      />
    </svg>
  );
}

export default ChevronLeftIcon;
