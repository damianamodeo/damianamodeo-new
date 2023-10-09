import { LabelRoot } from '../shadcn/label';
import { cn } from '@services';

type LabelProps = {
  children?: string;
  className?: string;
};

export const Label = ({ children, className }: LabelProps) => {
  return (
    <LabelRoot className={cn('text-xs font- px-2 text-grey-400 dark:text-grey-400 text-left', className)} htmlFor={children}>
      {children}
    </LabelRoot>
  );
};

export default Label;
