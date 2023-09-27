import { VariantProps } from 'class-variance-authority';
import { className, style } from './style';

export function CircleIcon(props: VariantProps<typeof style>) {
  const classNameString = className(props);
  return (
    <svg
      className={`${classNameString} `}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      //   stroke="currentColor"
      //   stroke-width="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      //   class="lucide lucide-circle"
    >
      <circle cx="12" cy="12" r="10" />
    </svg>
  );
}

export default CircleIcon;
