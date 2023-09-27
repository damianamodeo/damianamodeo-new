import { VariantProps, cva } from 'class-variance-authority';

const color = {
  primary: `text-primary-500 dark:text-primary-400 stroke-primary-500 dark:stroke-primary-400`,
  secondary: `text-secondary-500 dark:text-secondary-400 stroke-secondary-500 dark:stroke-secondary-400`,
  default: `text-gray-900 dark:text-default-100 stroke-gray-900 dark:stroke-gray-100`,
  slate: `text-slate-500 dark:text-slate-400 stroke-slate-500 dark:stroke-slate-400`,
  gray: `text-gray-500 dark:text-gray-400 stroke-gray-500 dark:stroke-gray-400`,
  zinc: `text-zinc-500 dark:text-zinc-400 stroke-zinc-500 dark:stroke-zinc-400`,
  neutral: `text-neutral-500 dark:text-neutral-400 stroke-neutral-500 dark:stroke-neutral-400`,
  stone: `text-stone-500 dark:text-stone-400 stroke-stone-500 dark:stroke-stone-400`,
  red: `text-red-500 dark:text-red-400 stroke-red-500 dark:stroke-red-400`,
  orange: `text-orange-500 dark:text-orange-400 stroke-orange-500 dark:stroke-orange-400`,
  amber: `text-amber-500 dark:text-amber-400 stroke-amber-500 dark:stroke-amber-400`,
  yellow: `text-yellow-500 dark:text-yellow-400 stroke-yellow-500 dark:stroke-yellow-400`,
  lime: `text-lime-500 dark:text-lime-400 stroke-lime-500 dark:stroke-lime-400`,
  green: `text-green-500 dark:text-green-400 stroke-green-500 dark:stroke-green-400`,
  emerald: `text-emerald-500 dark:text-emerald-400 stroke-emerald-500 dark:stroke-emerald-400`,
  teal: `text-teal-500 dark:text-teal-400 stroke-teal-500 dark:stroke-teal-400`,
  cyan: `text-cyan-500 dark:text-cyan-400 stroke-cyan-500 dark:stroke-cyan-400`,
  sky: `text-sky-500 dark:text-sky-400 stroke-sky-500 dark:stroke-sky-400`,
  blue: `text-blue-500 dark:text-blue-400 stroke-blue-500 dark:stroke-blue-400`,
  darkblue: `text-darkblue-500 dark:text-darkblue-400 stroke-darkblue-500 dark:stroke-darkblue-400`,
  indigo: `text-indigo-500 dark:text-indigo-400 stroke-indigo-500 dark:stroke-indigo-400`,
  violet: `text-violet-500 dark:text-violet-400 stroke-violet-500 dark:stroke-violet-400`,
  purple: `text-purple-500 dark:text-purple-400 stroke-purple-500 dark:stroke-purple-400`,
  fuchsia: `text-fuchsia-500 dark:text-fuchsia-400 stroke-fuchsia-500 dark:stroke-fuchsia-400`,
  pink: `text-pink-500 dark:text-pink-400 stroke-pink-500 dark:stroke-pink-400`,
  rose: `text-rose-500 dark:text-rose-400 stroke-rose-500 dark:stroke-rose-400`,
};

const size = {
  100: 'h-1 w-1',
  200: 'h-2 w-2',
  300: 'h-3 w-3',
  400: 'h-4 w-4',
  500: 'h-5 w-5',
  600: 'h-6 w-6',
  700: 'h-7 w-7',
  800: 'h-8 w-8',
  900: 'h-9 w-9',
};

const weight = {
  100: 'stroke-[0.20px]',
  200: 'stroke-[0.40px]',
  300: 'stroke-[0.60px]',
  400: 'stroke-[0.80px]',
  500: 'stroke-[1.00px]',
  600: 'stroke-[1.20px]',
  700: 'stroke-[1.40px]',
  800: 'stroke-[1.60px]',
  900: 'stroke-[1.80px]',
};
export const colorOptions = Object.keys(color);
export const widthOptions = Object.keys(weight);

export const style = cva(
  `font-medium focus:outline-none rounded text-white dark:text-black`,
  {
    variants: {
      color,
      size,
      weight,
    },
    compoundVariants: [{}],
    defaultVariants: {
      color: 'primary',
      size: 500,
      weight: 500,
    },
  }
);

export const className = ({
  color,
  size,
  weight,
}: VariantProps<typeof style>) => style({ color, size, weight });
