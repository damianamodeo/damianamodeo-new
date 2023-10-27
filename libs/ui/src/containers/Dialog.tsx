import { useTernaryDarkMode } from 'usehooks-ts';
import {
  Dialog as DialogRoot,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogClose,
  DialogTitle,
  DialogTrigger,
} from '../shadcn/dialog';
import { cn } from '@services';
import { useState } from 'react';

type Props = {
  children: string | React.ReactNode;
  title?: string | React.ReactNode;
  trigger?: string | React.ReactNode;
  className?: string;
  open?: boolean;
  setOpen?: (value: boolean) => void; //this should not be a number but trying to create an error to find out what it should be
};

export const Dialog = ({
  children,
  title,
  trigger,
  className,
  open,
  setOpen,
}: Props) => {
  return (
    <DialogRoot
      open={open}
      // onOpenChange={setOpen}
    >
      {trigger && <DialogTrigger>{trigger}</DialogTrigger>}
      <DialogContent className={cn('', className)}>
        {/* <DialogHeader> */}
        {/* <DialogDescription>{children}</DialogDescription> */}
        {/* </DialogHeader> */}
        {setOpen && (
          <DialogClose
            onClick={() => {
              console.log('ggg');
              setOpen(false);
            }}
          ></DialogClose>
        )}
        {title && <DialogTitle className="pb-4">{title}</DialogTitle>}
        {children}
      </DialogContent>
    </DialogRoot>
  );
};
