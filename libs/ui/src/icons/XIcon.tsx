import { VariantProps } from 'class-variance-authority';
import { className, style } from './style';

export function XIcon(props: VariantProps<typeof style>) {
  const classNameString = className(props);
  return (
    //     <svg
    // className={`${className(props)}`}
    //   aria-hidden='true'
    //   xmlns='http://www.w3.org/2000/svg'
    //   fill='none'
    //   viewBox='0 0 6 10'
    // >
    //   <path
    //     // stroke='currentColor'
    //     strokeLinecap='round'
    //     strokeLinejoin='round'
    //     // strokeWidth='2'
    //     d='M5 1 1 5l4 4'
    //   />
    // </svg>

    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      //   stroke="currentColor"
      //   stroke-width="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`${className(props)}`}
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}

export default XIcon;
